"use client";
import { useState, useEffect } from "react";
import VoteBox from "./VoteBox";
import { GetPostsResponseBody } from "@/types/posts";
import Link from "next/link";

interface RecentVotesProps {
  votes?: GetPostsResponseBody;
}

export default function RecentVote({ votes }: RecentVotesProps) {
  const [voteResults, setVoteResults] = useState<{ [key: number]: number }>({});

  async function onClickVoteBox(
    e: React.MouseEvent<HTMLDivElement>,
    votePostId: number,
    voteItemId: number,
  ) {
    // 1. poll id를 받아서 put 요청 보냄
    // 2. response가 오면 그걸 핸들링 함
    // 3. response에는 각각의 투표율이 와야됨
    // 4. 내가 클릭한 poll의 style을 면경해줌 클래스 변경함
    e.preventDefault();
    const data = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/posts/${votePostId}/items/${voteItemId}`,
      {
        method: "POST",
      },
    );
    const parsedData = await data.json();
    setVoteResults((prevResults) => ({
      ...prevResults,
      [voteItemId]: parsedData.voteRate,
    }));
  }

  console.log(voteResults);

  return (
    <section className="item-center flex h-fit w-full flex-col justify-center gap-3">
      {votes?.data?.map((vote) => (
        <Link
          key={vote.votePostId}
          href={`/vote/${vote.votePostId}`}
          className="flex h-80 w-full flex-col items-center justify-between gap-3 rounded-lg bg-gray-light p-4 sm:p-8"
        >
          <div className="w-fit self-baseline rounded bg-yellow px-1 text-xs">
            {vote.tag.tagTitle}
          </div>
          <div className="flex w-full items-center justify-between">
            <h3 className="max-w-[80%]">{vote.title}</h3>
            <div className="w-fit rounded bg-blue px-1 text-xs text-white">
              {vote.labels[0].labelTitle}
            </div>
          </div>
          <div className="w-full">{vote.content}</div>
          <div className="flex w-full flex-col gap-3">
            {vote.voteItems.map((voteItem) => (
              <div
                className="vote-container"
                key={voteItem.voteItemId}
                onClick={(e) => {
                  onClickVoteBox(e, vote.votePostId, voteItem.voteItemId);
                  console.log(voteResults[voteItem.voteItemId]);
                }}
              >
                <div
                  className={
                    voteResults[voteItem.voteItemId]
                      ? "vote-after-mine"
                      : "vote-item-before"
                  }
                >
                  {voteItem.voteItemTitle}
                </div>
                <div className={`w-${voteItem.voteRate}`}></div>
              </div>
            ))}
          </div>
        </Link>
      ))}
    </section>
  );
}
