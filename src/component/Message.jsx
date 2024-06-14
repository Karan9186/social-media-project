import React from "react";
import "./message.css";
import { FaImage, FaRegStar } from "react-icons/fa";
import { IoStar, IoVideocam, IoVideocamOutline } from "react-icons/io5";
import { AiOutlineLink } from "react-icons/ai";
import { MdOutlineGifBox } from "react-icons/md";
function Message() {
  return (
    <div className="container messageMain">
      <div className="profileName">
        <button className="demoUser active">
          <img src="src/assets/react.svg" alt="" />
          <div className="UserDetails">
            <h5>karan </h5>
            <p>Lorem ipsum dolor sit</p>
          </div>
        </button>

        <button className="demoUser ">
          <img src="src/assets/react.svg" alt="" />
          <div className="UserDetails">
            <h5>karan </h5>
            <p>Lorem ipsum dolor sit</p>
          </div>
        </button>

        <button className="demoUser ">
          <img src="src/assets/react.svg" alt="" />
          <div className="UserDetails">
            <h5>karan </h5>
            <p>Lorem ipsum dolor sit</p>
          </div>
        </button>

        <button className="demoUser ">
          <img src="src/assets/react.svg" alt="" />
          <div className="UserDetails">
            <h5>karan </h5>
            <p>Lorem ipsum dolor sit</p>
          </div>
        </button>
      </div>
      <div className="MessageClass">
        <div className="d-flex justify-content-around bgForMainDiv">
          <div className="mainChatUser">
            <img src="src/assets/react.svg" alt="" />
            <div>
              <h5>karan</h5>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="d-flex aling-items-center gap-1 ">
            <button className="iconBtnForMsg">
              <IoStar size={"27px"} color={"#373737"} />
            </button>
            <button className="iconBtnForMsg">
              <IoVideocam size={"27px"} color={"#373737"} />
            </button>
          </div>
        </div>
        <div className="mainMessageBox">
          <p>Your all message </p>
        </div>
        <div className="">
          <input
            type="text"
            className="inputMsg"
            placeholder="Enter Your Message"
          />
          <div className="sendMessage">
            <div className="d-flex gap-2">
              <button className="iconBtnForMsg">
                <FaImage size={"25px"} />
              </button>
              <button className="iconBtnForMsg">
                <AiOutlineLink size={"25px"} />
              </button>
              <button className="iconBtnForMsg">
                <MdOutlineGifBox size={"25px"} />
              </button>
            </div>
            <div>
              <button className="btn btn-primary">send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Message;
