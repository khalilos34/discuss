export const paths = {
  home: () => "/",
  postShow: (topicSlug: string, postId: string) =>
    "/topics/" + topicSlug + "/posts/" + postId,
  postCreate: (topicSlug: string) => "/topics/" + topicSlug + "/new",
  topicShow: (topicSlug: string) => "/topics/" + topicSlug,
};
