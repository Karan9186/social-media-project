import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import "./header.css";
function Header({ setHome, setActiveTab }) {
  return (
    <div>
      <header
        className="p-3 position-fixed bg-white w-100 "
        style={{ zIndex: "100" }}
      >
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start gap-2">
            <img src="src/assets/logo1.png" alt="" style={{ height: "70px" }} />
            <a
              href="/"
              className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
            ></a>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <a
                  href="#"
                  className="nav-link px-2 text-secondary"
                  onClick={() => {
                    setHome("");
                    setActiveTab("");
                  }}
                >
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2 text-dark">
                  My Network
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2 text-dark">
                  Jobs
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2 text-dark">
                  Notification
                </a>
              </li>
            </ul>
            <form action="" className="d-flex gap-1" style={{ width: "60%" }}>
              <input
                type="text"
                style={{ width: "90%" }}
                className="input_search"
                placeholder="Search Here"
              />
              <button className="border-0 bg-transparent">
                <IoSearchSharp size={"27px"} />
              </button>
            </form>
            {/* <div className="text-end">
              <button type="button" className="btn btn-secondary m-3">
                Login
              </button>
              <button type="button" className="btn btn-danger">
                Sign-up
              </button>
            </div> */}
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
