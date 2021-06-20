const { Router } = require("express");

const handleCommentForPost = require("../../controllers/api/handleCommentForPost");
const handleCreatePost = require("../../controllers/api/handleCreatePost");
const handleDeletePost = require("../../controllers/api/handleDeletePost");

const router = Router();

router.post("/:id/comments", handleCommentForPost);
router.delete("/:id", handleDeletePost);
router.post("/", handleCreatePost);

module.exports = router;
