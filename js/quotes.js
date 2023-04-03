const quotes = [
  {
    quotes: "지나간 슬픔에 새 눈물을 낭비하지 마라",
    author: "에우리피데스",
  },
  {
    quotes: "성실한 한마디의 말은 백만 마디의 헛된 찬사보다 낫다",
    author: "카네기",
  },
  {
    quotes: "거짓말은 그 자체가 죄일 뿐 아니라 정신을 더럽힌다",
    author: "플라톤",
  },
  {
    quotes: "고통 뒤의 즐거움은 달콤하다",
    author: "존 드라이든",
  },
  {
    quotes: "남에게, 또 남의 일에 대해서 말을 삼가라",
    author: "필딩",
  },
  {
    quotes: "가장 바쁜 사람이 가장 많은 시간을 갖는다",
    author: "비네",
  },
  {
    quotes:
      "정직한 사람이 없다고 말하는 사람이야말로 가장 정직하지 못한 사람이다",
    author: "조지 버클리",
  },
  {
    quotes: "책 없는 방은 영혼 없는 육체와 같다",
    author: "키케로",
  },
  {
    quotes: "하나의 선행은 다른 선행을 부른다",
    author: "헤이우드",
  },
  {
    quotes: "오늘 할 수 있는 일에 최선을 다해라",
    author: "뉴턴",
  },
];
//10개의 객체로 이루어진 배열

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quotes;
author.innerText = todayQuote.author;
