import createLatestPostsCard from"../src/cards/latest-posts";
import fetchPosts from"../src/fetchers/posts-fetcher";

module.exports = async (req, res) => {
  const { name } = req.query;
  res.setHeader("Content-Type", "image/svg+xml");
  try {
    console.log(name);
    const posts = await fetchPosts(name);
    return res.send(createLatestPostsCard(posts));
  } catch (e) {
    console.log(e);
    return res.send(e.message);
  }
};
