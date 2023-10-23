export const storeToken = (token: any) => {
  return localStorage.setItem("token", token);
};

export const storeUser = (user: any) => {
  return localStorage.setItem("user", JSON.stringify(user));
};

// let pathName = window.location.pathname;
// let isAuthPath = pathName.includes("login") || pathName.includes("signup");

export const getUser = () => {
  let user = localStorage.getItem("user");
  console.log('retrieved user',user)
  return user ? JSON.parse(user || "{}") : "";
  // return user
  //   ? JSON.parse(user || "{}")
  //   : !isAuthPath && (window.location.href = "/");
};

export const getToken = () => {
  let token = localStorage.getItem("token");
  return token ? token || "" : "";
  // return token
  //   ? token || ""
  //   : (!isAuthPath && (window.location.href = "/")) || "";
};
