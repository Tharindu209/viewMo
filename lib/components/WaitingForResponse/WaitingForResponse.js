"use client";

import React from "react";
import Image from "next/image";
import loaderGif from "../../public/images/icons/loader-one.gif";

const WaitingForResponse = ({ showText = true }) => {
  return (
    <div className="chat-section generate-section">
      <div className="author">
        <Image
          src={loaderGif}
          width={40}
          height={40}
          alt="Loader Images"
        />
      </div>
      {showText && (
        <div className="chat-content">
          <h6 className="title color-text-off mb--0">
            Generating answers for you…
          </h6>
        </div>
      )}
    </div>
  );
};

export default WaitingForResponse;
