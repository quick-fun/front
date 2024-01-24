import Link from "next/link";

interface VoteBoxProps {
  tag: string;
  title: string;
  vote_state: string;
  contents: string;
  option_a: string;
  option_b: string;
  time: number;
  comments: number;
  onClickVote?: (e: any) => void;
}

const VoteBox = (props: VoteBoxProps) => {
  return (
    <Link
      href="/vote/1"
      className="flex h-80 w-full flex-col items-center justify-between gap-3 rounded-lg bg-gray-light p-4 sm:p-8"
    >
      <div className="w-fit self-baseline rounded bg-yellow px-1 text-xs">
        {props.tag}
      </div>
      <div className="flex w-full items-center justify-between">
        <h3 className="max-w-[80%]">{props.title}</h3>
        <div className="w-fit rounded bg-blue px-1 text-xs text-white">
          {props.vote_state}
        </div>
      </div>
      <div className="w-full">{props.contents}</div>
      <div className="flex w-full flex-col gap-3">
        <div
          className="vote-container vote-container-mine"
          onClick={props.onClickVote}
        >
          <div>{props.option_a}</div>
          <div className="vote-mine w-8/12"></div>
        </div>
        <div className="vote-container">
          <div>{props.option_b}</div>
          <div className="vote-not-mine w-2/12"></div>
        </div>
      </div>
    </Link>
  );
};

export default VoteBox;
