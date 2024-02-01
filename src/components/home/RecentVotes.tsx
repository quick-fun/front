"use client";
import { useEffect } from "react";
import VoteBox from "./VoteBox";
import { GetPostsResponseBody } from "@/types/posts";
import Link from "next/link";

async function onClickVoteBox(e: any) {
  // 1. poll id를 받아서 put 요청 보냄
  // 2. response가 오면 그걸 핸들링 함
  // 3. response에는 각각의 투표율이 와야됨
  // 4. 내가 클릭한 poll의 style을 면경해줌 클래스 변경함
  e.preventDefault();
  const data = await fetch("http://localhost:8080/user?cursor=10?limit=10");
  const parsedData = await data.json();
  console.log(parsedData);
}

interface RecentVotesProps {
  votes: GetPostsResponseBody;
}

export default function RecentVote({ votes }: RecentVotesProps) {
  return (
    <section className="item-center flex h-fit w-full flex-col justify-center gap-3">
      {votes?.data?.map((vote) => (
        <Link
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
            <div
              className="vote-container vote-container-mine"
              onClick={onClickVoteBox}
            >
              <div>{vote.voteItems[0].voteItemTitle}</div>
              <div className="vote-mine w-8/12"></div>
            </div>
            <div className="vote-container">
              <div>{vote.voteItems[1].voteItemTitle}</div>
              <div className="vote-not-mine w-2/12"></div>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
}
