[2021-08-03] 과제물

# 주제
AXIOS 모듈을 이용하여 http 요청을 통해 게시글 작성, 삭제, 조회 기능 구현

## API 명세

|method|url|desc|
|------|---|---|
|GET|https://api.t0dd.kr/v0/articles|게시판의 글을 불러옵니다. (기본 20개, 최신순)|
|GET|https://api.t0dd.kr/v0/articles?take=10&index=30|// 30번째 부터, 10개를 불러오도록 할 수 있습니다.|
|GET|https://api.t0dd.kr/v0/article/1|1 이라는 id 를 가진 글 1개를 불러옵니다.|
|POST|https://api.t0dd.kr/v0/article|게시판에 글을 작성합니다.|
|PUT|https://api.t0dd.kr/v0/article/1|1 이라는 id 를 가진 글을 수정합니다.|
|DELETE|https://api.t0dd.kr/v0/article/1|1 이라는 id 를 가진 글을 삭제합니다.|

POST, PUT 할 때 Request Body의 데이터 형식은 아래와 같습니다.

```json
{
  author: 't0dd',
  title: 'Hello World',
  content: 'Hello World, My name is t0dd. Nice to meet you guys'
}
```

## axios 설치

CDN: https://unpkg.com/axios/dist/axios.min.js
```
npm: npm i -S axios
```

## 세부사항

- 게시판의 글을 불러와 캡쳐
- 게시판의 글을 2번 작성한 후, 게시판의 글을 불러와 캡쳐
- 첫번 째로 작성한 글을 수정한 후, 게시판의 글을 불러와 캡쳐
- 두번 째로 작성한 글을 삭제한 후, 게시판의 글을 불러와 캡쳐