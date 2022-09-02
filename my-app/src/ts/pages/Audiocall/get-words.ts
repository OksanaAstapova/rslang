// helpers audiocall

export const getWords: any = async (page = 0, group = 0) => {
  const rawResponse = await fetch(
    `https://rssslang.herokuapp.com/words?page=${page}&group=${group}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  const rezult = await rawResponse.json();
  return rezult;
};

export const randomPage = () => {
  // from https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
  return Math.floor(Math.random() * 6) + 1;
};


