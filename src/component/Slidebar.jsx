import React, { useState } from "react";
import { IoCreateSharp, IoPerson } from "react-icons/io5";
import "./sidebar.css";
import { IoMdSave } from "react-icons/io";
import { AiFillMessage } from "react-icons/ai";
import { TbHelpOctagonFilled } from "react-icons/tb";
function Slidebar({
  selectSide,
  setSelectSide,
  sideBar,
  setSideBar,
  setHome,
  setActiveTab,
  activeTab,
}) {
  return (
    <div>
      <div
        className="d-flex flex-column flex-shrink-0 p-3 bg-white position-fixed for_bg_side"
        style={{
          width: "300px",
          marginTop: "101px",
          zIndex: "100",
          borderRight: "1px solid #80808033",
          borderBottom: "1px solid #80808033",
          boxShadow: "2px 1px 20px 0px #8080804a",
        }}
      >
        <hr />
        <ul className="nav nav-pills flex-column mb-auto ">
          <li className="nav-item">
            <a
              href="#"
              className="d-flex justify-content-center pb-0 nav-link bg-primary text-white"
              aria-current="page"
              onClick={() => setSelectSide(!selectSide)}
            >
              <IoCreateSharp size={"25px"} className="mt-1" />
              <p className="mt-1">Create Post</p>
            </a>
          </li>
          <hr />
          <li>
            <a
              href="#"
              className={`btn w-100 d-flex mb-2 ${
                activeTab == "Dashboard" ? "bg-info text-white " : ""
              }`}
              onClick={() => {
                setActiveTab("Dashboard");
                setSideBar("Profile");
                setHome("profile");
              }}
            >
              <div className="d-flex gap-2 mt-1 ">
                <IoPerson size={"20px"} />
                <h6>Profile</h6>
              </div>
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`btn w-100 d-flex mb-2 ${
                activeTab == "Orders" ? "bg-info text-white" : ""
              }`}
              onClick={() => {
                setActiveTab("Orders");
                setSideBar("Saved");
                setHome("profile");
              }}
            >
              <div className="d-flex gap-2 mt-1">
                <IoMdSave size={"20px"} />
                <h6>Saved</h6>
              </div>
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`btn w-100 d-flex mb-2 ${
                activeTab == "Products" ? "bg-info text-white" : ""
              }`}
              onClick={() => {
                setActiveTab("Products");
                setSideBar("Message");
                setHome("profile");
              }}
            >
              <div className="d-flex gap-2 mt-1">
                <AiFillMessage size={"20px"} />
                <h6>Message</h6>
              </div>
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`btn w-100 d-flex mb-2 ${
                activeTab == "Customers" ? "bg-info text-white" : ""
              }`}
              onClick={() => {
                setSideBar("Help");
                setActiveTab("Customers");
                setHome("profile");
              }}
            >
              <div className="d-flex gap-2 mt-1">
                <TbHelpOctagonFilled size={"20px"} />
                <h6>Help</h6>
              </div>
            </a>
          </li>
        </ul>
        <hr />
        <div className="d-flex bg-white p-2 rounded ">
          <img
            src="src/assets/react.svg"
            alt=""
            width="32"
            height="32"
            className="rounded-circle me-2"
          />
          <h5 className="text-dark mt-1">karan9186</h5>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default Slidebar;
