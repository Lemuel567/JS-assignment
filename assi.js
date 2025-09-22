const user = {
  id: 1,
  profile: {
    username: "Lemuel",
    email: "lemuelbenyrku11@gmail.com"
  },
  settings: {
    theme: "dark",
    notifications: true
  }
};

function showUserInfo(user) {
  const {
    profile: { username, email },
    settings: { theme }
  } = user;

  console.log("Username:", username);
  console.log("Email:", email);
  console.log("Theme:", theme);
}


showUserInfo(user);
