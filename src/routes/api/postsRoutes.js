const { Router } = require("express");

const handleCommentForPost = require("../../controllers/api/handleCommentForPost");
const handleCreatePost = require("../../controllers/api/handleCreatePost");
const handleDeletePost = require("../../controllers/api/handleDeletePost");
const handleEditPosts = require("../../controllers/api/handleEditPost");

const router = Router();

router.post("/:id/comments", handleCommentForPost);
router.delete("/:id", handleDeletePost);
router.post("/", handleCreatePost);
router.put("/:id/edit", handleEditPosts);

module.exports = router;
