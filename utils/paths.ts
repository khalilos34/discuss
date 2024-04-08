export const paths = {
  home: () => "/",
  postShow: (topicSlug: string, postId: string) =>
    "/topic/" + topicSlug + "/posts/" + postId,
  postCreate: (topicSlug: string) => "/topic/" + topicSlug + "/new",
  topicShow: (topicSlug: string) => "/topic/" + topicSlug,
};
