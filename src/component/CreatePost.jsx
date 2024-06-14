import React, { useRef, useState } from "react";
import "./creatpost.css";
import { MdDelete, MdOutlinePoll, MdSchedule } from "react-icons/md";
import { TbPhoto } from "react-icons/tb";
import { IoDocumentAttachOutline } from "react-icons/io5";

import { RxCross1 } from "react-icons/rx";

function CreatePost({ selectSide, setSelectSide, setPostdata, postData }) {
  let [tag, setTag] = useState([]);
  let postDetails = useRef();
  let tagRef = useRef();
  let submitForm = (e) => {
    e.preventDefault();
    let allD = postDetails.current.value;
    let popstTag = tag;
    // let CurrenData = [
    //   ...postData,
    //   {
    //     body: allD,
    //     id: 1,
    //     reactions: { likes: 0, dislikes: 0 },
    //     tags: popstTag,
    //     title: "His mother had always taught him",
    //     userId: 121,
    //     views: 305,
    //   },
    // ];
    // setPostdata(CurrenData);
    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: 5,
        body: allD,
        tags: popstTag,
        reactions: { love: 65, like: 100, wow: 45, sad: 20 },
      }),
    })
      .then((res) => res.json())
      .then((post) => setPostdata([...postData, post]));
    setSelectSide(!selectSide);
  };
  let getTag = (e) => {
    let tagName = tagRef.current.value;
    let allTagI = [...tag, tagName];
    setTag(allTagI);
    tagRef.current.value = "";
    e.preventDefault();
  };
  let deleteTag = (Inx) => {
    let newTag = tag.filter((v, i) => i != Inx);
    setTag(newTag);
  };
  let allTags = tag.map((v, i) => {
    return (
      <button
        key={i}
        className="bg-info text-white ps-2 pe-2 rounded ms-4 border-0 mt-2 position-relative"
        onClick={() => deleteTag(i)}
      >
        {v}
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          <MdDelete />
        </span>
      </button>
    );
  });
  return (
    <div className={`mainCreatePost mb-3`}>
      <div className="main_back">
        <div>
          <button
            className="crossIcon bg-transparent border-0"
            onClick={() => setSelectSide(!selectSide)}
          >
            <RxCross1 />
          </button>
        </div>
        <div className="mb-3">{allTags}</div>
        <div className="alert alert-info" role="alert">
          We'll never share your information with anyone else.
        </div>
        <form>
          <textarea
            name="postT"
            id="postTitle"
            className="w-100 postTitle"
            placeholder="what is your thought?"
            ref={postDetails}
          ></textarea>
          <hr />
          <div className="mb-3 container forTag">
            <input
              type="text"
              placeholder="add tag"
              className="inputTag"
              ref={tagRef}
            />
            <button className="btn btn-info text-white" onClick={getTag}>
              submit
            </button>
          </div>
          <div className="d-flex align-item-center justify-content-between">
            <div className="">
              <button className="border-0 bg-transparent">
                <TbPhoto size={"25px"} />
              </button>
              <button className="border-0 bg-transparent">
                <IoDocumentAttachOutline size={"25px"} />
              </button>
              <button className="border-0 bg-transparent">
                <MdOutlinePoll size={"25px"} />
              </button>
            </div>
            <div className="d-flex align-items-center justify-content-end gap-3">
              <button className="border-0 bg-transparent">
                <MdSchedule size={"25px"} />
              </button>
              <input
                type="submit"
                className="btn btn-primary "
                onClick={submitForm}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreatePost;
