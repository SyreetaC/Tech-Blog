const { Post, Comment, User } = require("../../models");

const renderPostPage = async (req, res) => {
  // get post by ID with associated user and comments
  const postFromModel = await Post.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "title", "body", "user_id"],
    include: [
      {
        model: User,
        as: "user",
        attributes: ["username"],
      },
      {
        model: Comment,
        as: "comments",
        attributes: ["id", "message", "user_id"],
        include: [
          {
            model: User,
            as: "user",
            attributes: ["username"],
          },
        ],
      },
    ],
  });
  const post = postFromModel.get({ plain: true });
  const comments = post.comments.map((comment) => {
    return {
      ...comment,
      myComment: req.session.userId === comment.user_id,
    };
  });

  // verify who can delete and edit posts
  res.render("viewPost", {
    ...post,
    comments,
    myPost: req.session.userId === post.user_id,
  });
};

module.exports = renderPostPage;
