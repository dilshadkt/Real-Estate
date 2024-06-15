import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import apiRequest from "../../lib/apiRequest";

const UseSavePost = (post) => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [save, setSaved] = useState(post.isSaved);
  const handleSave = async () => {
    if (!currentUser) {
      navigate("/login");
      return;
    }
    setSaved((prev) => !prev);
    try {
      await apiRequest.post("user/save", { postId: post.id });
    } catch (error) {
      setSaved((prev) => !prev);
    }
  };
  return [save, handleSave];
};

export default UseSavePost;
