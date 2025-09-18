export const getString = (title: string) => {
  try {
    return decodeURIComponent(title);
  } catch (e) {
    console.error("Error decoding URI component:", e);
    return title;
  }
};
