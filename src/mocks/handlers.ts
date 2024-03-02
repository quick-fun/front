import { http, HttpResponse } from "msw";
import { GetPostsResponseBody } from "@/types/posts";

const voteList = [];
const requestList = [] as any[];

export const handlers = [
  http.get("/posts", ({ request, params }) => {
    return HttpResponse.json<GetPostsResponseBody>({
      data: [
        {
          votePostId: 1,
          title: "제목입니다 제목입니다~~ 제목 테스트",
          content: "오늘 저녁 뭐 먹을지 고민임",
          voteItems: [
            {
              voteItemId: 1,
              voteItemTitle: "순두부찌개",
              voteRate: 0,
            },
            {
              voteItemId: 2,
              voteItemTitle: "김치찌개",
              voteRate: 100,
            },
          ],
          tag: {
            tagId: 1,
            tagTitle: "#일상",
          },
          labels: [
            {
              labelId: 1,
              labelTitle: "박빙🔥",
            },
          ],
          createdAt: "2024-01-21T09:56:51.849339",
          commentTotalCount: 0,
        },
        {
          votePostId: 2,
          title: "두번째 제목입니다 제목입니다~~ long long 제목 테스트",
          content: "매일 집에 가고싶다.. 집에 있어도 집에 가고싶고 그렇다...",
          voteItems: [
            {
              voteItemId: 1,
              voteItemTitle: "ㅇㅈ",
              voteRate: 0,
            },
            {
              voteItemId: 2,
              voteItemTitle: "ㄴㅇㅈ",
              voteRate: 100,
            },
          ],
          tag: {
            tagId: 1,
            tagTitle: "#고민",
          },
          labels: [
            {
              labelId: 1,
              labelTitle: "압승💪🏻",
            },
          ],
          createdAt: "2024-01-21T09:56:51.849339",
          commentTotalCount: 10,
        },
        {
          votePostId: 3,
          title: "졸려 배고파",
          content: "제곧내",
          voteItems: [
            {
              voteItemId: 1,
              voteItemTitle: "졸려",
              voteRate: 0,
            },
            {
              voteItemId: 2,
              voteItemTitle: "졸리고 배고파 ㅠㅠ",
              voteRate: 100,
            },
          ],
          tag: {
            tagId: 1,
            tagTitle: "태그명",
          },
          labels: [
            {
              labelId: 1,
              labelTitle: "라벨명",
            },
          ],
          createdAt: "2024-01-21T09:56:51.849339",
          commentTotalCount: 1,
        },
      ],
    });
  }),
  // 투표하기
  http.post(
    "/posts/:votePostId/items/:voteItemId",
    async ({ request, params }) => {
      const { votePostId, voteItemId } = params;
      voteList.push({ votePostId: votePostId, voteItemId: voteItemId });
      requestList.push(request);

      const tempVoteRate = Math.round(Math.random() * 100);

      // Don't forget to declare a semantic "201 Created"
      // response and send back the newly created post!
      return HttpResponse.json(
        // 투표 게시글에 투표 후
        {
          votePostId: votePostId,
          voteItems: [
            {
              voteItemId: 1,
              voteRate: tempVoteRate,
            },
            {
              voteItemId: 2,
              voteRate: 100 - tempVoteRate,
            },
          ],
        },
        { status: 201 },
      );
    },
  ),
  http.get("/posts/hot", () => {
    return HttpResponse.json<GetPostsResponseBody>({
      data: [
        {
          votePostId: 1,
          title: "의대 정원 논란 이해 된다 vs 안된다",
          content:
            "요즘 의대 정원 확대 때문에 정부 vs. 의사가 맞서 의료 공백 문제로 시끌시끌하잖아요. 코로나19 같은 감염병 위기가 아닌데도 보건의료재난 경보 단계를 최상위인 ‘심각’ 상태인데요. 최근 정부가 전공의들이 병원에서 떠나며 생긴 의료 공백을 줄이기 위해 “비대면 진료, 확 허용해!” 해서 갑론을박이 벌어지고 있어요.",
          voteItems: [
            {
              voteItemId: 1,
              voteItemTitle: "의대 정원 논란 이해간다",
            },
            {
              voteItemId: 2,
              voteItemTitle: "의대 정원 논란 이해 안간다",
            },
          ],
          tag: {
            tagId: 1,
            tagTitle: "잡담",
          },
          labels: [
            {
              labelId: 1,
              labelTitle: "박빙",
            },
            {
              labelId: 2,
              labelTitle: "마감 직전",
            },
          ],
          createdAt: "2023-12-27T16:07:12",
          commentTotalCount: 999,
        },
        {
          votePostId: 2,
          title: "데일 카네기의 인간 관계론 읽으신 분만",
          content:
            "타인을 바꾸려고 하지 말고 자기 자신을 바꾸라는 저자의 의견에 동의하시는지?",
          voteItems: [
            {
              voteItemId: 3,
              voteItemTitle: "동의한다",
            },
            {
              voteItemId: 4,
              voteItemTitle: "반대한다",
            },
          ],
          tag: {
            tagId: 1,
            tagTitle: "잡담",
          },
          labels: [
            {
              labelId: 1,
              labelTitle: "박빙",
            },
            {
              labelId: 2,
              labelTitle: "마감 직전",
            },
          ],
          createdAt: "2023-12-27T16:07:12",
          commentTotalCount: 999,
        },
        {
          votePostId: 3,
          title:
            "긴긴 제목 테스트 긴긴 제목 테스트 긴긴 제목 테스트 긴긴 제목 테스트 긴긴 제목 테스트 ",
          content:
            "타인을 바꾸려고 하지 말고 자기 자신을 바꾸라는 저자의 의견에 동의하시는지?",
          voteItems: [
            {
              voteItemId: 3,
              voteItemTitle: "동의한다",
            },
            {
              voteItemId: 4,
              voteItemTitle: "반대한다",
            },
          ],
          tag: {
            tagId: 1,
            tagTitle: "잡담",
          },
          labels: [
            {
              labelId: 1,
              labelTitle: "박빙",
            },
            {
              labelId: 2,
              labelTitle: "마감 직전",
            },
          ],
          createdAt: "2023-12-27T16:07:12",
          commentTotalCount: 999,
        },
        {
          votePostId: 4,
          title:
            "긴긴 제목 테스트 긴긴 제목 테스트 긴긴 제목 테스트 긴긴 제목 테스트 긴긴 제목 테스트 ",
          content:
            "타인을 바꾸려고 하지 말고 자기 자신을 바꾸라는 저자의 의견에 동의하시는지?",
          voteItems: [
            {
              voteItemId: 3,
              voteItemTitle: "동의한다",
            },
            {
              voteItemId: 4,
              voteItemTitle: "반대한다",
            },
          ],
          tag: {
            tagId: 1,
            tagTitle: "잡담",
          },
          labels: [
            {
              labelId: 1,
              labelTitle: "박빙",
            },
            {
              labelId: 2,
              labelTitle: "마감 직전",
            },
          ],
          createdAt: "2023-12-27T16:07:12",
          commentTotalCount: 999,
        },
      ],
    });
  }),
];
