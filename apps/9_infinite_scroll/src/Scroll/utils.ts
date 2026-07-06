import type { Data } from "./types";

export const fetchDisplayData = async (
  currentPage: number,
  callback: (data: Data[]) => void,
) => {
  fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=10`,
  ).then((response) => {
    response.json().then((data: Data[]) => {
      callback(data);
    });
  });
};
