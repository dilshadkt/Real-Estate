import React, { useContext, useState } from "react";
import "./chat.scss";
import { format } from "timeago.js";
import { AuthContext } from "../context/AuthContext";
import apiRequest from "../../lib/apiRequest";
import { SocketContext } from "../context/ChatContext";
const Chat = ({ chats }) => {
  const { currentUser } = useContext(AuthContext);
  const { socket } = useContext(SocketContext);
  const [chat, setChat] = useState(false);

  const handleOpenChat = async (id, receiver) => {
    try {
      const res = await apiRequest.get(`chat/${id}`);

      setChat({ ...res.data, receiver });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const text = formData.get("text");

    if (!text) return;
    try {
      const res = await apiRequest.post(`message/${chat.id}`, { text });

      setChat((prev) => ({ ...prev, message: [...prev.message, res.data] }));
      e.target.reset();
    } catch (error) {
      console.log(error);
    }
  };
  const testSocket = () => {
    socket.emit("test", "hi for clieknt");
  };
  return (
    <div className="chat">
      <button onClick={testSocket}>test</button>
      <div className="messages">
        <h1>Messages</h1>
        {chats.map((c) => (
          <div
            onClick={() => handleOpenChat(c.id, c.receiver)}
            key={c.id}
            style={{
              backgroundColor:
                c.seenBy.includes(currentUser.id) || chat?.id === c.id
                  ? "white"
                  : "#fecd514e",
            }}
            className="message"
          >
            <img src={c.receiver.avatar || "/noavatar.png"} alt="" />
            <span>{c.receiver.username}</span>
            <p>{c.lastMessage}</p>
          </div>
        ))}
      </div>
      {chat && (
        <div className="chatBox">
          <div className="top">
            <div className="user">
              <img src={chat.receiver.avatar || "/noavatar.png"} alt="" />
              {chat.receiver.username}
            </div>
            <span className="close" onClick={() => setChat(null)}>
              X
            </span>
          </div>
          <div className="center">
            {chat.message.map((msg) => (
              <div
                key={msg.id}
                className="chatMessage "
                style={{
                  alignSelf:
                    msg.userId === currentUser.id ? "flex-end" : "flex-start",
                  textAlign: msg.userId === currentUser.id ? "right" : "left",
                }}
              >
                <p>{msg.text}</p>
                <span>{format(msg.createdAt)}</span>
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="bottom">
            <textarea name="text"></textarea>
            <button>Send</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chat;
