"use client";

import React, { use, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import sal from "sal.js";

import DocImg from "../../public/images/icons/document-file.png";
import author from "../../public/images/team/amr_safey.png";
import ai_img from "../../public/images/team/avater.png";

import Reaction from "../Common/Reaction";
import ChatOption from "../Common/ChatOptions";
import TypingBox from "../Common/TypingBox";
import WaitingForResponse from "../WaitingForResponse/WaitingForResponse";
import { addMessage, updateMessage, clearHistory } from "@/components/store/Slices/chatSlice";
import API_CONFIG from "../API";
import Popup from "../PopUp/Popup";

const Chat = ({uname, pword}) => {
  const [editableIndex, setEditableIndex] = useState(null);
  const [editedText, setEditedText] = useState("");
  const [userInput, setUserInput] = useState("");
  const [chatResponse, setChatResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [popup, setPopup] = useState(null);

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.loggedUser);
  const chatHistory = useSelector((state) => state.chat.chatHistory);
  const initialMessageAdded = useRef(false);

  useEffect(() => {
    sal();
    if (chatHistory.length === 0 && !initialMessageAdded.current) {
      dispatch(
        addMessage({
          author: ai_img,
          title: "Bot",
          desc: "Hello, how can I help you today?",
          isBadge: true,
          badge: "View Mo",
          isReaction: true,
          isBorder: true,
        })
      );
      initialMessageAdded.current = true;
    }
  }, [dispatch, chatHistory.length, clearHistory]);

  const handleEdit = (index) => {
    setEditableIndex(index);
    setEditedText(chatHistory[index].desc);
  };

  const handleSave = (index) => {
    const newChatHistory = [...chatHistory];
    newChatHistory[index].desc = editedText;
    dispatch(updateMessage({ index, newContent: editedText }));
    setEditableIndex(null);
  };

  const handleCancel = () => {
    setEditableIndex(null);
    setEditedText("");
  };

  const handleSend = async (input) => {
    const newUserMessage = {
      author: author,
      title: "User",
      desc: input,
      isBadge: true,
      badge: "user",
      isReaction: false,
      isBorder: true,
    };

    try{
      const END_POINT = process.env.NEXT_PUBLIC_BASE_API_URL + API_CONFIG.login;

      const response = await fetch( END_POINT,        
        {
          method: "POST",
          credentials: 'include',
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: JSON.stringify({
            username: uname,
            password: password
          }),
        }
      );

      const data = await response.json();
      
      if (data.id) {
        const new_user = {
          access_token: data.access_token,
          token_type: data.token_type,
          id: data.id,
          name: data.name,
          email: data.email,
          vectorstore: data.vectorstore,
        };
        dispatch(addUser(new_user));
    } }catch (error) {
      setPopup({
        message: "Success",
        type: 1,
        size: 'medium',
        position: 'top-center',
        duration: 3000,
      });
    } 

    dispatch(addMessage(newUserMessage));
    setUserInput("");
    setIsLoading(true);

    // chat with pdf bot
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_BASE_API_URL + API_CONFIG.chat,      
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user_id: user[0].id,
            username: user[0].email,
            message: input,
            history: "",
          }),
        }
      );

      const data = await response.json();

      setChatResponse(data.response);

      dispatch(
        addMessage({
          author: ai_img,
          title: "Bot",
          desc: data?.response,
          isBadge: true,
          badge: "View Mo",
          isReaction: true,
          isBorder: true,
        })
      );
    } catch (error) {
      setPopup({
        message: "Error sending message",
        type: 2,
        size: 'medium',
        position: 'top-center',
        duration: 3000,
      });

    } finally {
      setIsLoading(false);
    }
  };

  const handleUserInput = (value) => {
    setUserInput(value);
    handleSend(value);
  };

  return (
    <>
      <ChatOption barImg={DocImg} title="Chat with Bot" wdt={14} htd={18} />
      <TypingBox handleUserInput={handleUserInput} />
      {chatHistory &&
        chatHistory.map((data, index) => (
          <div className="pb-0 chat-box-list" id="chatContainer" key={index}>
            <div className="chat-box author-speech">
              <div className="inner">
                <div className="chat-section">
                  <div className="author">
                    <Image
                      className="w-100"
                      width={40}
                      height={40}
                      src={author}
                      alt="Author"
                    />
                  </div>
                  <div className="chat-content">
                    <h6 className="title">
                      {data?.title}
                      {data?.isBadge && (
                        <span className="rainbow-badge-card">
                          <i className="fa-sharp fa-regular fa-check"></i>
                          {data?.badge}
                        </span>
                      )}
                    </h6>
                    {editableIndex === index ? (
                      <textarea
                        className="my-4 editable"
                        value={editedText}
                        onChange={(e) => setEditedText(e.target.value)}
                      />
                    ) : (
                      <p className="editable me-4">{data.desc}</p>
                    )}

                    {data.isEditable && (
                      <div
                        className={`edit-actions ms-0 ${
                          editableIndex !== null ? "d-inline-flex ms-0" : ""
                        }`}
                      >
                        <button
                          className="edit-btn btn-default btn-small btn-border"
                          onClick={() => handleEdit(index)}
                        >
                          <span className="text">Edit</span>
                        </button>
                        <button
                          className="save-regenerate-btn btn-default btn-small"
                          onClick={() => handleSave(index)}
                        >
                          <span className="text">Save &amp; Regenerate</span>
                        </button>
                        <button
                          className="cancel-btn btn-default btn-small btn-border"
                          onClick={handleCancel}
                        >
                          <span className="text">Cancel</span>
                        </button>
                      </div>
                    )}
                    {data.isReaction && <Reaction />}
                  </div>
                </div>
                {isLoading && !data.isReaction && <WaitingForResponse />}
              </div>
            </div>
          </div>
        ))}

      {popup && (
        <Popup
          message={popup.message}
          type={popup.type}
          size={popup.size}
          position={popup.position}
          duration={popup.duration}
          onClose={() => setPopup(null)}
        />
      )}
    </>
  );
};

export default Chat;
