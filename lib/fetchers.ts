export const fetcher = (...args: never[]) =>
  // @ts-expect-error sss
  fetch(...args, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then((res) => res.json());
