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
  http.post("/login/auth", async ({ request, params }) => {
    const url = new URL(request.url);
    const socialType = url.searchParams.get("socialType");

    if (!socialType) {
      return new HttpResponse(null, {
        status: 404,
      });
    }

    return HttpResponse.json({
      socialType,
    });
  }),
];
