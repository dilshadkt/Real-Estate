import React, { useContext, useRef } from "react";
import "./home.scss";
import SearchBar from "../../components/searchBar/SearchBar";
import { AuthContext } from "../../components/context/AuthContext";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Home = () => {
  const { currentUser } = useContext(AuthContext);
  const main = useRef(null);
  const t1 = gsap.timeline();
  useGSAP(
    () => {
      gsap.from(main.current, {
        y: 200,
        duration: 1,
      });
    },
    { scope: main }
  );
  return (
    <>
      <div>
        <div className="homePage">
          <div className="textContainer">
            <div className="wrapper">
              <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                explicabo suscipit cum eius, iure est nulla animi consequatur
                facilis id pariatur fugit quos laudantium temporibus dolor ea
                repellat provident impedit!
              </p>
              <SearchBar />
              <div className="boxes">
                <div className="box">
                  <h1>16+</h1>
                  <h2>Years of Experience</h2>
                </div>
                <div className="box">
                  <h1>200</h1>
                  <h2>Award Gained</h2>
                </div>
                <div className="box">
                  <h1>2000+</h1>
                  <h2>Property Ready</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="imgContainer">
            <div className="videoContainer" ref={main}>
              <video autoPlay muted>
                <source
                  src="https://stream.media.muscache.com/zFaydEaihX6LP01x8TSCl76WHblb01Z01RrFELxyCXoNek.mp4?v_q=high"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
        <div className="about"></div>
      </div>
    </>
  );
};

export default Home;
