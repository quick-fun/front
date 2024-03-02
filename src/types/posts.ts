// 투표 게시글 페이징 목록 조회

export interface VoteItem {
  voteItemId: number;
  voteItemTitle: string;
  voteRate?: number;
}

interface TagItem {
  tagId: number;
  tagTitle: string;
}

interface LabelItem {
  labelId: number;
  labelTitle: string;
}

export interface VoteLists {
  votePostId: number;
  title: string;
  content: string;
  voteItems: Array<VoteItem>;
  tag: TagItem;
  labels: Array<LabelItem>;
  createdAt: string;
  commentTotalCount: number;
}

// GET posts?cursor=10&limit=10
export interface GetPostsResponseBody {
  data: Array<VoteLists>;
}

interface UserProfile {
  memberId: number;
  nickname: string;
  memberMedalTitle: string;
  imageUrl: string;
}

// GET posts/{votePostId}
export interface GetPostsDetailResponseBody extends VoteLists {
  profile: UserProfile;
}

// POST posts
export interface PostPost {
  title: string;
  content: string;
  tagId: number;
  voteItemTitles: Array<string>;
  localDAteTime: string;
  isEnableComments: boolean;
}
