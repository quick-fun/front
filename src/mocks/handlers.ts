import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/user", ({ request, params }) => {
    return HttpResponse.json({
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
            tagTitle: "태그명",
          },
          labels: [
            {
              labelId: 1,
              labelTitle: "라벨명",
            },
          ],
          createdAt: "2024-01-21T09:56:51.849339",
          commentTotalCount: 0,
        },
        {
          votePostId: 2,
          title: "두번째 제목입니다 제목입니다~~ 제목 테스트",
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
            tagTitle: "태그명",
          },
          labels: [
            {
              labelId: 1,
              labelTitle: "라벨명",
            },
          ],
          createdAt: "2024-01-21T09:56:51.849339",
          commentTotalCount: 10,
        },
        {
          votePostId: 3,
          title: "이것은 세번째 제목입니다 제목입니다~~ 제목 테스트",
          content: "오늘 저녁 뭐 먹을지 고민임 ㄹㅇㅋㅋ",
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
  http.post("/posts", async ({ request }) => {
    // Read the intercepted request body as JSON.
    const newPost = await request.json();

    // Don't forget to declare a semantic "201 Created"
    // response and send back the newly created post!
    return HttpResponse.json(newPost, { status: 201 });
  }),
];
