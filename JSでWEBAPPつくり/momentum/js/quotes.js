const quotes = [
    {
        quote: "삶이 있는 한 희망은 있다",
        author: "키케로",
    },
    {
        quote: "산다는것 그것은 치열한 전투이다",
        author: "로망로랑",
    },
    {
        quote: "언제나 현재에 집중할수 있다면 행복할것이다",
        author: "파울로 코엘료",
    },
    {
        quote: "신은 용기있는자를 결코 버리지 않는다",
        author: "켄러",
    },
    {
        quote: "피할수 없으면 즐겨라",
        author: "로버트 엘리엇",
    },
    {
        quote: "먼저핀꽃은 먼저진다 남보다 먼저 공을 세우려고 조급히 서둘것이 아니다",
        author: "채근담",
    },
    {
        quote: "한번의 실패와 영원한 실패를 혼동하지 마라",
        author: "F.스콧 핏제랄드",
    },
    {
        quote: "오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아 간다",
        author: "앙드레 말로",
    },
    {
        quote: "행복은 습관이다, 그것을 몸에 지녀라",
        author: "허버드",
    },
    {
        quote: "자신감 있는 표정을 지으면 자신감이 생긴다",
        author: "찰스 다윈",
    },
    {
        quote: "1퍼센트의 가능성, 그것이 나의 길이다",
        author: "나폴레옹",
    },
    {
        quote: " 꿈을 계속 간직하고 있으면 반드시 실현할 때가 온다",
        author: "괴테",
    },
    {
        quote: "마음만을 가지고 있어서는 안된다. 반드시 실천하여야 한다.",
        author: "이소룡",
    },
    {
        quote: "곧 위에 비교하면 족하지 못하나,아래에 비교하면 남음이 있다.",
        author: "명심보감",
    },
    {
        quote: "더 많이 판단할수록 덜 사랑하게 된다.",
        author: "오너 드 발자크",
    },
// 15개
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = `${todaysQuote.quote} \n`;
author.innerText = `- ${todaysQuote.author} -`;