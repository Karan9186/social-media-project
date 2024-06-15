import React from "react";
import Post from "./component/Post";

function AllPost({postData}) {
  let allPost = [...postData].reverse().map((post, i) => {
    return <Post key={i} post={post} />;
  });
  return <div style={{marginLeft:"13vw"}}>{allPost}</div>;
}

export default AllPost;
