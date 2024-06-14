import React, { useState } from "react";
import "./help.css";
import FaqData from "./store/FaqData";
function Help() {
  let [qus, setQus] = useState(FaqData.question);
  let allFaq = FaqData.map((v, i) => {
    return (
      <>
        <div className="insideFAQ">
          <h3>
            <button onClick={() => setQus(v.question)}>
              Q {i + 1}. {v.question}
            </button>
          </h3>
          <p
            className={`position-relative FAQAns ${
              qus == v.question ? "showFAQ" : "notFAQ"
            }`}
          >
            A. {v.answer}
          </p>
        </div>
      </>
    );
  });
  return (
    <div>
      <div className="container px-4 py- HelpSectionCard" id="custom-cards">
        <h2 className="pb-2 border-bottom">Help</h2>

        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
          <div className="col cont01Help">
            <div
              className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
              style={{
                backgroundImage:
                  "url(https://img.freepik.com/free-vector/helping-partner-concept-illustration_114360-8867.jpg?t=st=1717915187~exp=1717918787~hmac=9cf8bff3a694f1b0d0022459c64583dbeaaf298812366281d801bbb2bdd74f4c&w=740)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "50% 40%",
                filter: "brightness(0.8)",
              }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h3
                  className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold"
                  style={{ textShadow: "0px 2px 10px black" }}
                >
                  Privacy Terms
                </h3>
              </div>
            </div>
          </div>

          <div className="col cont01Help">
            <div
              className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
              style={{
                backgroundImage:
                  "url(https://img.freepik.com/free-photo/realistic-phone-studio-social-media-concept_23-2151459510.jpg?t=st=1717915799~exp=1717919399~hmac=91c72d4f193ad7ae4f9f38a8daa61715c6ce39b189f36cbb435a5350cd2f02ec&w=996)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "60% 10%",
                filter: "brightness(0.8)",
              }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h3
                  className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold"
                  style={{ textShadow: "0px 2px 10px black" }}
                >
                  Content Terms
                </h3>
              </div>
            </div>
          </div>

          <div className="col cont01Help">
            <div
              className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
              style={{
                backgroundImage:
                  "url(https://img.freepik.com/free-photo/3d-illustration-computer-monitor-login-screen_107791-16390.jpg?t=st=1717916005~exp=1717919605~hmac=04a168343ac83ee0f5c13b70ef54bce10f90b43d890467ee6756b43e956b3753&w=900)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "50% 10%",
                filter: "brightness(0.8)",
              }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1 text-white">
                <h3
                  className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold "
                  style={{ textShadow: "0px 2px 10px black" }}
                >
                  Account Terms
                </h3>
              </div>
            </div>
          </div>
        </div>
        <h1>Frequently Asked Questions</h1>
        <div className=" mt-4 mainFAQCont">{allFaq}</div>
      </div>
    </div>
  );
}

export default Help;
