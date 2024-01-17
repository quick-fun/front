import Link from "next/link";

interface PollBoxProps {
  tag: string;
  title: string;
  poll_state: string;
  contents: string;
  option_a: string;
  option_b: string;
  time: number;
  comments: number;
  onClickPoll?: (e: any) => void;
}

const PollBox = (props: PollBoxProps) => {
  return (
    <Link
      href="/poll/1"
      className="flex h-80 w-full flex-col items-center justify-between gap-3 rounded-lg bg-gray-light p-4 sm:p-8"
    >
      <div className="w-fit self-baseline rounded bg-yellow px-1 text-xs">
        {props.tag}
      </div>
      <div className="flex w-full items-center justify-between">
        <h3 className="max-w-[80%]">{props.title}</h3>
        <div className="w-fit rounded bg-blue px-1 text-xs text-white">
          {props.poll_state}
        </div>
      </div>
      <div className="w-full">{props.contents}</div>
      <div className="flex w-full flex-col gap-3">
        <div
          className="poll-container poll-container-mine"
          onClick={props.onClickPoll}
        >
          <div>{props.option_a}</div>
          <div className="poll-mine w-8/12"></div>
        </div>
        <div className="poll-container">
          <div>{props.option_b}</div>
          <div className="poll-not-mine w-2/12"></div>
        </div>
      </div>
    </Link>
  );
};

export default PollBox;
