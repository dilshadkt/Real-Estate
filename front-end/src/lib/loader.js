import { defer } from "react-router-dom";
import apiRequest from "./apiRequest";

export const singlePageLoader = async ({ request, params }) => {
  const res = await apiRequest.get("/post/" + params.id);
  return res.data;
};

export const ListPageLoader = ({ request, params }) => {
  const query = request.url.split("?")[1];
  const postPromise = apiRequest.get("/post?" + query);
  return defer({
    postResponse: postPromise,
  });
};

export const profilePageLoader = ({ requsest, params }) => {
  const postPromise = apiRequest.get("user/profilePosts");
  return defer({
    postResponse: postPromise,
  });
};
