import React from "react";
import "./post.css";
import { BiSolidLike } from "react-icons/bi";
import { FaRegComments, FaRegShareSquare } from "react-icons/fa";
import { MdAddReaction } from "react-icons/md";

function Post({ post }) {
  let allTags = post.tags.map((v, i) => {
    return (
      <div key={i}>
        <span className="badge text-bg-info">{v}</span>
      </div>
    );
  });
  return (
    <div className="p-2">
      <div className="col ">
        <div className="card shadow-sm cardShow ">
          <img src="" alt="" className="img_width" />
          <div className="card-body ">
            <p className="card-text">{post.body}</p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                >
                  View
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary d-flex align-items-center gap-2"
                >
                  <h6 style={{ position: "relative", top: "4px" }}>
                    {post.reactions.likes}
                  </h6>
                  <BiSolidLike size={"25px"} />
                </button>
              </div>
              <small className="text-body-secondary">{post.date}</small>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-around pb-3">
            <input
              type="text"
              className="inputComment"
              placeholder="Add a comment"
            />

            <div className="d-flex align-items-center gap-2">
              <div>
                <button className="d-flex  gap-1 btnForMsg">
                  <FaRegComments size={"25px"} />
                  <h6>Comment</h6>
                </button>
              </div>
              <div>
                <button className="d-flex gap-1 btnForMsg">
                  <FaRegShareSquare size={"25px"} />
                  <h6>Share</h6>
                </button>
              </div>
              <div>
                <button className="d-flex gap-1 btnForMsg">
                  <MdAddReaction size={"25px"} />
                  <h6>Reactions</h6>
                </button>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <a href="" className="d-flex gap-3 ms-4 mb-3">
              {allTags}
            </a>
            <button
              className="d-flex gap-1 btnForMsg position-relative me-2"
              style={{ top: "-8px" }}
            >
              <img
                src="src/assets/save.png"
                alt=""
                height={"24px"}
                width={"24px"}
              />
              {/* <h6>save</h6> */}
            </button>
          </div>

          <div className="alert alert-secondary ms-3 me-3" role="alert">
            <div className="d-flex gap-3">
              <div>
                <img
                  src="src/assets/heart.png"
                  alt=""
                  style={{ width: "20px", height: "20px" }}
                />
                {"  "}
                {post.reactions.love}
              </div>
              <div>
                <img
                  src="src/assets/wow.png"
                  alt=""
                  style={{ width: "20px", height: "20px" }}
                />
                {"  "}
                {post.reactions.wow}
              </div>
              <div>
                <img
                  src="src/assets/sad.png"
                  alt=""
                  style={{ width: "20px", height: "20px" }}
                />
                {"  "}
                {post.reactions.sad}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
