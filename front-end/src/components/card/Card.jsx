import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./card.scss";
import UseSavePost from "../hooks/UseSavePost";
import apiRequest from "../../lib/apiRequest";
import { AuthContext } from "../context/AuthContext";
const Card = ({ item }) => {
  console.log(item);
  const [save, handleSave] = UseSavePost(item);
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChat = async () => {
    if (!currentUser) {
      navigate("/login");
    }
    try {
      const res = await apiRequest.post("chat", { receiverId: item.userId });
      navigate("/profile");
    } catch (error) {
      console.log(error.data);
    }
  };
  return (
    <div className="card">
      <Link to={`/${item.id}`} className="imageContainer">
        <img src={item.images[0]} alt="" />
      </Link>
      <div className="textContainer">
        <h2 className="title">
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>
        <p className="address">
          <img src="/pin.png" alt="" />
          <span>{item.address}</span>
        </p>
        <p className="price">$ {item.price}</p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src="/bed.png" alt="" />
              <span>{item.bedroom} bedroom</span>
            </div>
            <div className="feature">
              <img src="/bath.png" alt="" />
              <span>{item.bathroom} bathroom</span>
            </div>
          </div>
          <div className="icons">
            {currentUser?.id !== item.userId && (
              <div
                onClick={handleSave}
                className="icon"
                style={{ background: save ? "#fece51" : "white" }}
              >
                <img src="/save.png" alt="" />
              </div>
            )}
            <div className="icon" onClick={handleChat}>
              <img src="/chat.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
