import React from "react";
import UserNav from "../Common/UserNav";

const Notification = () => {
  return (
    <>
      <div className="rbt-main-content mb-0">
        <div className="rbt-daynamic-page-content center-width">
          <div className="rbt-dashboard-content">
            <UserNav title="Notification" />

            <div className="content-page pb--50">
              <div className="chat-box-list">
                <div className="single-settings-box notification-box overflow-hidden">
                  <div className="form-check form-switch notification-box-switch">
                    <h4 className="title">Notification</h4>
                  </div>
                  <div className="rbt-sm-separator mt-0"></div>
                  <div className="rbt-checkbox-grp">
                    <h5 className="title">Rainbow Platform</h5>
                    <div className="rbt-checkbox-wrapper">
                      <input
                        id="rbt-checkbox-1"
                        name="rbt-checkbox-1"
                        type="checkbox"
                        value="yes"
                      />
                      <label htmlFor="rbt-checkbox-1">
                        Generate Notification
                      </label>
                    </div>
                    <div className="rbt-checkbox-wrapper">
                      <input
                        id="rbt-checkbox-2"
                        name="rbt-checkbox-2"
                        type="checkbox"
                        value="yes"
                      />
                      <label htmlFor="rbt-checkbox-2">New Notificaton</label>
                    </div>
                    <div className="rbt-checkbox-wrapper">
                      <input
                        id="rbt-checkbox-3"
                        name="rbt-checkbox-3"
                        type="checkbox"
                        value="yes"
                      />
                      <label htmlFor="rbt-checkbox-3">New Comment</label>
                    </div>
                    <div className="rbt-checkbox-wrapper">
                      <input
                        id="rbt-checkbox-4"
                        name="rbt-checkbox-4"
                        type="checkbox"
                        value="yes"
                      />
                      <label htmlFor="rbt-checkbox-4">Random Message</label>
                    </div>
                    <div className="rbt-checkbox-wrapper">
                      <input
                        id="rbt-checkbox-5"
                        name="rbt-checkbox-5"
                        type="checkbox"
                        value="yes"
                      />
                      <label htmlFor="rbt-checkbox-5">Mentioned</label>
                    </div>
                    <div className="rbt-checkbox-wrapper">
                      <input
                        id="rbt-checkbox-6"
                        name="rbt-checkbox-6"
                        type="checkbox"
                        value="yes"
                      />
                      <label htmlFor="rbt-checkbox-6">Text Notification</label>
                    </div>
                  </div>
                  <div className="rbt-checkbox-grp">
                    <h5 className="title">From team</h5>
                    <div className="rbt-checkbox-wrapper">
                      <input
                        id="rbt-checkbox-7"
                        name="rbt-checkbox-7"
                        type="checkbox"
                        value="yes"
                      />
                      <label htmlFor="rbt-checkbox-7">New Notificaton</label>
                    </div>
                    <div className="rbt-checkbox-wrapper">
                      <input
                        id="rbt-checkbox-8"
                        name="rbt-checkbox-8"
                        type="checkbox"
                        value="yes"
                      />
                      <label htmlFor="rbt-checkbox-8">Random Message</label>
                    </div>
                  </div>
                  <div className="rbt-checkbox-grp">
                    <h5 className="title">From Synapse</h5>
                    <div className="rbt-checkbox-wrapper">
                      <input
                        id="rbt-checkbox-9"
                        name="rbt-checkbox-9"
                        type="checkbox"
                        value="yes"
                      />
                      <label htmlFor="rbt-checkbox-9">Mentioned</label>
                    </div>
                    <div className="rbt-checkbox-wrapper">
                      <input
                        id="rbt-checkbox-11"
                        name="rbt-checkbox-11"
                        type="checkbox"
                        value="yes"
                      />
                      <label htmlFor="rbt-checkbox-11">New Comment</label>
                    </div>
                  </div>
                  <div className="form-group mt--40 mb--0">
                    <a className="btn-default" href="#">
                      Save Changes
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notification;
