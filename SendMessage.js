import React, { useState } from "react";
import { auth, db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const SendMessage = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const chatRef = collection(db, "chats");
    await addDoc(chatRef, {
      message,
      sentBy: auth.currentUser.uid,
      timestamp: serverTimestamp(),
    });
    setMessage("");
  };

  return (
    <form className="send-message" onSubmit={handleSubmit}>
      <label htmlFor="messageInput" hidden>
        Enter Message
      </label>
      <input
        id="messageInput"
        name="messageInput"
        type="text"
        className="form-input__input"
        placeholder="type message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
};
export default SendMessage;
