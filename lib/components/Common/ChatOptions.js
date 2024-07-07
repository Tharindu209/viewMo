import Image from "next/image";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearHistory, addMessage } from "@/components/store/Slices/chatSlice";
import ai_img from "../../public/images/team/avater.png";

const TopBar = ({ barImg, title, wdt, htd, padding }) => {
  const dispatch = useDispatch();

  const handleClearHistory = () => {
    dispatch(clearHistory());
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
  };

  return (
    <div className={`chat-top-bar ${padding ? "mb--30" : ""}`}>
      <div className="section-title">
        <div className="icon">
          <Image src={barImg} width={wdt} height={htd} alt="Icon" />
        </div>
        <h6 className="title">{title}</h6>
      </div>
      <div className="dropdown history-box-dropdown">
        <button
          type="button"
          className="more-info-icon dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i className="fa-regular fa-ellipsis"></i>
        </button>
        <ul className="dropdown-menu style-one">
          <li>
            <a className="dropdown-item" href="#">
              <i className="fa-sharp fa-solid fa-arrows-rotate"></i> Regenerate
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              <i className="fa-solid fa-file-lines"></i> Rename
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              <i className="fa-solid fa-share-nodes"></i> Share
            </a>
          </li>
          <li onClick={handleClearHistory}>
            <a className="dropdown-item delete-item" href="#">
              <i className="fa-solid fa-trash-can"></i> Delete Chat
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopBar;
