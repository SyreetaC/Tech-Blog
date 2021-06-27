const handleSignupSubmit = async (event) => {
  // POST request with username and password
  // /auth/sign-up
  // on success window location to /login
  event.preventDefault();

  const username = $("#username").val();
  const password = $("#password").val();

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

  const { id } = event.currentTarget;
  const message = $("#comment").val();

  const requestBody = { message };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    body: JSON.stringify(requestBody),
  };

  const response = await fetch(`/api/posts/${id}/comments`, options);

  if (response.status === 200) {
    window.location.replace(window.location.pathname);
  } else {
    console.log("Failed to post comment");
  }
};

const handlePostSubmit = async (event) => {
  event.preventDefault();

  const title = $("#blog-title").val();
  const body = $("#blog-content").val();

  const requestBody = {
    title,
    body,
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    body: JSON.stringify(requestBody),
  };

  const response = await fetch(`/api/posts`, options);

  if (response.status === 200) {
    window.location.replace("/dashboard");
  } else {
    console.log("Failed to create post");
  }
};

const handlePostDelete = async (event) => {
  const { id } = event.target;

  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
  };

  const response = await fetch(`/api/posts/${id}`, options);

  if (response.status === 200) {
    window.location.replace("/dashboard");
  } else {
    console.log("Failed to delete post");
  }
  // DELETE request for post id
  // /api/posts/{postId}
  // on success window location to /dashboard
};

const handlePostEdit = async (event) => {
  const { id } = event.target;
  //to do!
};

$("#signup-form").submit(handleSignupSubmit);
$("#login-form").submit(handleLoginSubmit);
$("#create-blog").submit(handlePostSubmit);
$('[name="delete-post-btn"]').click(handlePostDelete);
$('[name="edit-blog"]').submit(handlePostEdit);
$('[name="comment-form"]').submit(handleCommentSubmit);
$("#logout-button").click(handleLogoutClick);
console.log("client-side JS");
