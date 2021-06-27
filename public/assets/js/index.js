const handleSignupSubmit = async (event) => {
  // POST request with username and password
  // /auth/sign-up
  // on success window location to /login
  event.preventDefault();

  const username = $("#username").val();
  const password = $("#password").val();

  console.log(username, password);

  if (!username || !password) {
    console.log("YOU NEED TO ENTER SOMETHING");
    return;
  }

  if (username && password) {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      body: JSON.stringify({
        username,
        password,
      }),
    };

    const response = await fetch("/auth/sign-up", options);

    if (response.status !== 200) {
      console.log("FAILED SIGN UP");
    } else {
      window.location.replace("/login");
    }
  }
};

const handleLoginSubmit = async (event) => {
  event.preventDefault();

  const username = $("#username-login").val();
  const password = $("#password-login").val();

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    body: JSON.stringify({
      username,
      password,
    }),
  };

  const response = await fetch("/auth/login", options);

  if (response.status !== 200) {
    console.log("FAILED LOGIN");
  } else {
    window.location.replace("/dashboard");
  }
};

const handleLogoutClick = async () => {
  // POST request with username and password
  // /auth/logout
  // on success window location to /

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
  };

  const response = await fetch("/auth/logout", options);

  if (response.status !== 200) {
    console.log("FAILED LOGOUT");
  } else {
    window.location.replace("/login");
  }
};

const handleCommentSubmit = async (event) => {
  event.preventDefault();

  const message = $("#comment").val();
  const { id } = event.currentTarget;

  const requestBody = { message };
  console.log(id, message);

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    body: JSON.stringify({
      requestBody,
    }),
  };

  const response = await fetch("/api/posts/${id}/comments", options);
  if (response.status !== 200) {
    console.log("FAILED LOGIN");
  } else {
    window.location.replace(window.location.pathname);
  }
};

const handlePostSubmit = async (event) => {
  event.preventDefault();
  // POST request with title and body
  // /api/posts
  // on success window location to /dashboard
  const title = $("#post-title").val();
  const body = $("#post-body").val();

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    body: JSON.stringify({
      title,
      body,
    }),
  };

  const response = await fetch("/api/posts", options);

  if (response.status !== 200) {
    console.log("FAILED TO POST NEW BLOG POST");
  } else {
    window.location.replace("/dashboard");
  }
};

const handlePostDelete = async (event) => {
  event.preventDefault();

  const { id } = req.params;

  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    body: JSON.stringify({
      post_id: id,
    }),
  };

  const response = await fetch(`/api/posts/${id}`);

  if (response.status !== 200) {
    console.log("FAILED TO DELETE BLOG POST");
  } else {
    window.location.replace("/dashboard");
  }
  // DELETE request for post id
  // /api/posts/{postId}
  // on success window location to /dashboard
};

const handleCommentDelete = async (event) => {};

$("#signup-form").submit(handleSignupSubmit);
$("#login-form").submit(handleLoginSubmit);
$("#create-post-btn").submit(handlePostSubmit);
$("#delete-post-btn").click(handlePostDelete);
$('[name="comment-form"]').submit(handleCommentSubmit);
$("#logout-button").click(handleLogoutClick);
console.log("client-side JS");
