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
    <div className="relative flex min-h-40 min-w-[33%] flex-col justify-between rounded bg-white p-4 shadow-lg sm:min-w-full md:min-w-[50%]">
      <div className="label-ribbon">
        <span>TOP {index + 1}</span>
      </div>
      <div className="flex flex-col gap-2">
        <p className="w-11/12 text-xl font-medium">{data.title}</p>
        <div className="line-clamp-5">{data.content}</div>
      </div>
      <div className="flex items-center gap-1">
        <div className="mr-1">{data.createdAt}</div>
        <ChatBubbleBottomCenterTextIcon width={20} height={20} />
        {data.commentTotalCount}
      </div>
    </div>
  );
}
