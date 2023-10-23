const adminUrl = "https://password-manager-backend-app.vercel.app/api/v1";

export const apiUrls = {
  authenticate: `${adminUrl}/authenticate`,
  profile: `${adminUrl}/profile`,
  folders: `${adminUrl}/folders`,
  accounts: `${adminUrl}/accounts`,
  user: `${adminUrl}/user`,
};

export const apiQueryMethods = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  PATCH: "PATCH",
  DELETE: "DELETE",
};
