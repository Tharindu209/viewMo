import React from "react";

const Reaction = () => {
  return (
    <>
      <div className="reaction-section">
        <div className="btn-grp">
          <div className="left-side-btn dropup">
            <button
              data-bs-toggle="modal"
              data-bs-target="#likeModal"
              className="react-btn btn-default btn-small btn-border me-2"
            >
              <i className="fa-sharp fa-regular fa-thumbs-up"></i>
            </button>
            <button
              data-bs-toggle="modal"
              data-bs-target="#dislikeModal"
              className="react-btn btn-default btn-small btn-border me-2"
            >
              <i className="fa-sharp fa-regular fa-thumbs-down"></i>
            </button>
            <button
              data-bs-toggle="modal"
              data-bs-target="#shareModal"
              className="react-btn btn-default btn-small btn-border me-2"
            >
              <i className="fa-sharp fa-solid fa-share"></i>
            </button>
            <button
              type="button"
              className="react-btn btn-default btn-small btn-border dropdown-toggle me-2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fa-regular fa-ellipsis-vertical"></i>
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  <i className="fa-sharp fa-solid fa-copy"></i> Copy
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <i className="fa-sharp fa-solid fa-tag"></i> Pin Chat
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <i className="fa-solid fa-file-lines"></i> Rename
                </a>
              </li>
              <li>
                <a className="dropdown-item delete-item" href="#">
                  <i className="fa-solid fa-trash-can"></i> Delete Chat
                </a>
              </li>
            </ul>
          </div>
          <div className="right-side-btn">
            <button className="react-btn btn-default btn-small btn-border">
              <i className="feather-repeat"></i>
              <span>Regenerate</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reaction;
