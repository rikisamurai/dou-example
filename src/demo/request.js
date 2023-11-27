function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const fetchAllData = async () => {
  await sleep(1500);

  return {
    target: ["likes", "videos", "comments"],
    video: ["shorts", "comedy", "tragedy"],
  };
};

export const fetchVideoByTarget = async (target) => {
  await sleep(1500);

  switch (target) {
    case "likes":
      return ["Like Video 1", "Like Video 2", "Like Video 3"];
    case "videos":
      return ["Video 1", "Video 2", "Video 3"];
    case "comments":
      return ["Comment Video 1", "Comment Video 2", "Comment Video 3"];
    default:
      throw new Error("Invalid target");
  }
};
