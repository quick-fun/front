"use client";
import { useEffect } from "react";
import VoteBox from "./VoteBox";

async function onClickVoteBox(e: any) {
  // 1. poll id를 받아서 put 요청 보냄
  // 2. response가 오면 그걸 핸들링 함
  // 3. response에는 각각의 투표율이 와야됨
  // 4. 내가 클릭한 poll의 style을 면경해줌 클래스 변경함
  e.preventDefault();
  console.log(e);
  const data = await (await fetch("http://localhost:8080/user")).json();
  console.log(data);
}

export default function RecentVote() {

  return (
    <section className="item-center flex h-fit w-full flex-col justify-center gap-3">
      <VoteBox
        tag="#일상"
        title="내일 회사 돈으로 뭐 먹을지 고민이에요"
        vote_state="박빙🔥"
        contents="내일 점심 돈까스 먹을지 순두부 찌개 먹을지 고민이에용 골라주세여"
        option_a="순두부 먹어라"
        option_b="돈까스 먹어라"
        time={1}
        comments={100}
        onClickVote={onClickVoteBox}
      />
      <VoteBox
        tag="#일상"
        title="고민이에요"
        vote_state="박빙🔥"
        contents="내일 점심 돈까스 먹을지 순두부 찌개 먹을지 고민이에용"
        option_a="순두부 먹어라"
        option_b="돈까스 먹어라"
        time={1}
        comments={100}
      />
      <VoteBox
        tag="#일상"
        title="고민이에요"
        vote_state="박빙🔥"
        contents="내일 점심 돈까스 먹을지 순두부 찌개 먹을지 고민이에용"
        option_a="순두부 먹어라"
        option_b="돈까스 먹어라"
        time={1}
        comments={100}
      />
    </section>
  );
}
