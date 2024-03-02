import { VoteLists } from "@/types/posts";

interface HotVoteProp {
  data: VoteLists;
}

export default function HotVoteItem({ data }: HotVoteProp) {
  return (
    <div className="min-h-80 min-w-[33%] rounded bg-gray-white sm:min-w-full md:min-w-[50%]">
      <p>{data.title}</p>
      <div>{data.content}</div>
      <div>{data.createdAt}</div>
    </div>
  );
}
