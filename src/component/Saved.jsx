import React from "react";
import "./saved.css";
import { CiBookmarkRemove } from "react-icons/ci";
import { FaLink } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
import { MdOutlineBookmarkRemove, MdOutlineReport } from "react-icons/md";
function Saved() {
  return (
    <div class="card mainSaved">
      <img
        src="https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        class="card-img-top"
        alt="Fissure in Sandstone"
      />
      <div class="card-body">
        <h5 class="card-title">Saved Post</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <hr />
        <a href="#!" class="btn " data-mdb-ripple-init>
          <div className="d-flex gap-2">
            <MdOutlineBookmarkRemove size={"25px"} />
            <IoIosLink size={"25px"} />
            <MdOutlineReport size={"25px"} />
          </div>
        </a>
      </div>
    </div>
  );
}

export default Saved;
