import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Header";
import Slidebar from "./component/Slidebar";
import Footer from "./component/Footer";
import Post from "./component/Post";
import { useEffect, useState } from "react";
import CreatePost from "./component/CreatePost";
import Profile from "./component/Profile";
import Saved from "./component/Saved";
import Message from "./component/Message";
import Help from "./component/Help";
import AllPost from "./AllPost";

function App() {
  let [selectSide, setSelectSide] = useState(false);

  let [home, setHome] = useState("");
  let [sideBar, setSideBar] = useState("");
  let [activeTab, setActiveTab] = useState("");
  let [postData, setPostdata] = useState([]);
  let [loader, setLoader] = useState(false);
  useEffect(() => {
    setLoader(true);
    // Fetch data from dummyjson API
    let controller = new AbortController();
    let signal = controller.signal;
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        // Update the state with fetched data
        setPostdata(data.posts);
        setLoader(false);
      });
    return () => {
      console.log("aborted");
      controller.abort();
    };
  }, []);

  return (
    <>
      <Slidebar
        selectSide={selectSide}
        setSelectSide={setSelectSide}
        sideBar={sideBar}
        setSideBar={setSideBar}
        setHome={setHome}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <div className="d-flex">
        <Header setHome={setHome} setActiveTab={setActiveTab} />
        <div
          className="d-flex justify-content-center flex-wrap align-items-center "
          style={{ marginTop: "120px" }}
        >
          {selectSide ? (
            <CreatePost
              selectSide={selectSide}
              setSelectSide={setSelectSide}
              setPostdata={setPostdata}
              postData={postData}
            />
          ) : (
            <div className="d-flex justify-content-center flex-wrap align-items-center ">
              {home == "" ? (
                loader == true ? (
                  <div style={{ height: "100vh" }}>
                    <div className="text-center" style={{ marginLeft: "50vw" }}>
                      <div
                        className="spinner-border text-primary"
                        role="status"
                        style={{ marginTop: "25vh" }}
                      >
                        <span className="sr-only "></span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <AllPost postData={postData} />
                )
              ) : (
                <div>
                  {sideBar == "Profile" ? <Profile /> : ""}
                  {sideBar == "Saved" ? <Saved /> : ""}
                  {sideBar == "Message" ? <Message /> : ""}
                  {sideBar == "Help" ? <Help /> : ""}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
