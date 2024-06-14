import { createContext } from "react";
let addPost = (e) => {
  e.preventDefault();
};
let allData = createContext(addPost);
export default allData;
