import Link from "next/link";
import { VoteLists, VoteItem } from "@/types/posts";
import { useState, useEffect } from "react";

interface VoteBoxItem {
  voteData: VoteLists;
}

interface VoteItems {
  voteItemId: number;
  voteRate: number;
  isVoted?: boolean;
}

interface VotedItemState {
  votePostId: number;
  voteItems: Array<VoteItems>;
}

const VoteBox = ({ voteData }: VoteBoxItem) => {
  const [isVoted, setIsVoted] = useState<boolean>(false);
  const [votedItem, setVotedItem] = useState<VotedItemState>();

  async function onClickVoteBox(
    e: React.MouseEvent<HTMLDivElement>,
    votePostId: number,
    voteItemId: number,
  ) {
    e.preventDefault();
    const data = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/posts/${votePostId}/items/${voteItemId}`,
      {
        method: "POST",
      },
    );
    const parsedData = await data.json();
    setIsVoted(true);
    const votedData = addIsVotedToVoteItem(parsedData, voteItemId);
    setVotedItem(votedData);

    console.log(votedItem);

    console.log(
      votedItem?.voteItems.find((item) => item.isVoted === true)?.voteItemId,
    );

    function addIsVotedToVoteItem(
      voteData: VotedItemState,
      voteItemId: number,
    ) {
      // voteData 객체의 voteItems 배열을 수정
      const updatedVoteItems = voteData.voteItems.map((item) => {
        if (item.voteItemId === voteItemId) {
          return { ...item, isVoted: true };
        }
        return item;
      });

      // 수정된 voteItems 배열로 voteData 객체를 업데이트
      const updatedVoteData = {
        ...voteData,
        voteItems: updatedVoteItems,
      };

      return updatedVoteData;
    }
  }

  const getVoteItemStyles = (
    voteItem: VoteItem,
    votedItem?: VotedItemState,
  ) => {
    const isCurrentItemVoted =
      votedItem?.voteItems.find((item) => item.isVoted === true)?.voteItemId ===
      voteItem.voteItemId;
    const voteRate_mine = votedItem?.voteItems.find(
      (item) => item.isVoted === true,
    )?.voteRate;
    const voteRate_not_mine = votedItem?.voteItems.find(
      (item) => item.isVoted === undefined,
    )?.voteRate;
    console.log(voteRate_mine, voteRate_not_mine);

    // 조건에 따라 클래스와 스타일 결정
    const className = isCurrentItemVoted
      ? "vote-after-mine"
      : "vote-after-not-mine";

    const style = isCurrentItemVoted
      ? { width: `${voteRate_mine || 0}%` }
      : { width: `${voteRate_not_mine}%` }; // voteRate가 undefined일 경우를 대비해 0%를 기본값으로 설정

    return { className, style };
  };

  return (
    <Link
      key={voteData.votePostId}
      href={`/vote/${voteData.votePostId}`}
      className="flex h-80 w-full flex-col items-center justify-between gap-3 rounded-lg bg-gray-light p-4 sm:p-8"
    >
      <div className="w-fit self-baseline rounded bg-yellow px-1 text-xs">
        {voteData.tag.tagTitle}
      </div>
      <div className="flex w-full items-center justify-between">
        <h3 className="max-w-[80%]">{voteData.title}</h3>
        <div className="w-fit rounded bg-blue px-1 text-xs text-white">
          {voteData.labels[0].labelTitle}
        </div>
      </div>
      <div className="w-full">{voteData.content}</div>
      <div className="flex w-full flex-col gap-3">
        {voteData.voteItems.map((voteItem) => {
          // voteItem에 대한 스타일 결정
          const { className, style } = getVoteItemStyles(voteItem, votedItem);

          return (
            <div
              className="vote-item-default"
              key={voteItem.voteItemId}
              onClick={(e) =>
                onClickVoteBox(e, voteData.votePostId, voteItem.voteItemId)
              }
            >
              <div>{voteItem.voteItemTitle}</div>
              {isVoted && <div className={className} style={style} />}
            </div>
          );
        })}
      </div>
    </Link>
  );
};

export default VoteBox;
