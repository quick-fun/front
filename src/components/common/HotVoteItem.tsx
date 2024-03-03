import { VoteLists } from "@/types/posts";
import { ChatBubbleBottomCenterIcon } from "@heroicons/react/24/outline";
import { ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/outline";

interface HotVoteProp {
  data: VoteLists;
  index: number;
}

export default function HotVoteItem({ data, index }: HotVoteProp) {
  console.table(data);
  return (
    <div className="relative flex min-h-40 min-w-[33%] flex-col rounded bg-gray-white p-4 sm:min-w-full md:min-w-[50%]">
      <div className="label">
        <span>TOP {index + 1}</span>
      </div>
      <p className="text-xl font-bold">{data.title}</p>
      <div>{data.content}</div>
      <div className="flex items-center gap-1">
        <div className="mr-1">{data.createdAt}</div>
        <ChatBubbleBottomCenterTextIcon width={20} height={20} />
        {data.commentTotalCount}
      </div>
    </div>
  );
}
