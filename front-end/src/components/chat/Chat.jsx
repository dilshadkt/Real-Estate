import React, { useContext, useEffect, useRef, useState } from "react";
import "./chat.scss";
import { format } from "timeago.js";
import { AuthContext } from "../context/AuthContext";
import apiRequest from "../../lib/apiRequest";
import { SocketContext } from "../context/ChatContext";
import { useNotificationStore } from "../../lib/notificationStore";
const Chat = ({ chats }) => {
  const { currentUser } = useContext(AuthContext);
  const { socket } = useContext(SocketContext);
  const [userChats, setUserChats] = useState(chats);
  const [chat, setChat] = useState(false);
  const messageEndRef = useRef();
  const decrease = useNotificationStore((state) => state.decrease);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  const handleOpenChat = async (id, receiver) => {
    try {
      const res = await apiRequest.get(`chat/${id}`);
      setChat({ ...res.data, receiver });
      if (!res.data.seenBy.includes(currentUser.id)) {
        decrease();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e, id) => {
    setChat((prev) => ({ ...prev, lastMessage: "" }));
    e.preventDefault();
    const formData = new FormData(e.target);
    const text = formData.get("text");
    setUserChats((prev) =>
      prev.map((chat) =>
        chat.id === id ? { ...chat, lastMessage: text } : chat
      )
    );

    if (!text) return;
    try {
      const res = await apiRequest.post(`message/${chat.id}`, { text });

      setChat((prev) => ({ ...prev, message: [...prev.message, res.data] }));
      e.target.reset();
      socket.emit("sendMessage", {
        receiverId: chat.receiver.id,
        data: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const read = async () => {
      try {
        const res = await apiRequest.post(`chat/read/${chat.id}`);
      } catch (err) {
        console.log(err);
      }
    };
    if (socket && chat) {
      socket.on("getMessage", (data) => {
        if (chat.id === data.chatId) {
          setChat((prev) => ({ ...prev, message: [...prev.message, data] }));
          read();
        }
      });
    }
    return () => {
      socket.off("getMessage");
    };
  }, [socket, chat]);

  return (
    <div className="chat">
      <div className="messages">
        <h1>Messages</h1>
        {userChats.map((c) => (
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
            <div ref={messageEndRef}></div>
          </div>
          <form onSubmit={(e) => handleSubmit(e, chat.id)} className="bottom">
            <textarea name="text"></textarea>
            <button>Send</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chat;
