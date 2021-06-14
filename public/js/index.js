const handleSignupSubmit = async (event) => {
  console.log("sign-up here");
  // POST request with username and password
  // /auth/sign-up
  // on success window location to /login
  event.preventDefault();

  const username = $("#username-signup").val();
  const password = $("#password-signup").val();

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
  // POST request with username and password
  // /auth/login
  // on success window location to /dashboard
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

$("#signup-form").submit(handleSignupSubmit);
$("#login-form").submit(handleLoginSubmit);
$("#").click(handleLogoutClick);
console.log("client-side JS");
