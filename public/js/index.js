const handleSignupSubmit = () => {
  // POST request with username and password
  // /auth/sign-up
  // on success window location to /login
};

const handleLoginSubmit = () => {
  // POST request with username and password
  // /auth/login
  // on success window location to /dashboard
};

const handleLogoutClick = () => {
  // POST request with username and password
  // /auth/logout
  // on success window location to /
};

const handleCommentSubmit = () => {
  // POST request with comment message
  // /api/posts/{postId}/comments
  // on success window location to /posts/{postId}
};

const handlePostSubmit = () => {
  // POST request with title and body
  // /api/posts
  // on success window location to /dashboard
};

const handlePostDelete = () => {
  // DELETE request for post id
  // /api/posts/{postId}
  // on success window location to /dashboard
};

console.log("client-side JS");
