import createCard from "../src/cards/new-log";
import createCardDark from "../src/cards/new-log-black";
import fetchPost from "../src/fetchers/post-fetcher";
import fetchReadPost from "../src/fetchers/readpost-fetcher";
import createGist from "./gist";

module.exports = async (req, res) => {
  const { name, tag, color, slug } = req.query;
  res.setHeader("Content-Type", "image/svg+xml");
  try {
    const post = !slug
      ? await fetchPost(name, tag)
      : await fetchReadPost(name, slug);
    return res.send(createGist(color === "dark" ? createCardDark(post) : createCard(post)));
  } catch (e) {
    return res.send(e.message);
  }
};
