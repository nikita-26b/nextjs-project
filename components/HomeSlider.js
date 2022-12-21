import React from "react";
import { motion } from "framer-motion";

function HomeSlider(props) {
  return (
    <div className="home-slider">
      <div className="hero-container">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 0.8,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.2,
              },
            },
          }}
          className="oneDiv"
        >
          <div className="hero__scene-one-text hidden" style={{ opacity: "1" }}>
            <div className="hero__scene-one-text-first">
              <span
                className="hero__scene-one-text-word"
                style={{ opacity: "1" }}
              >
                We are America’s largest
              </span>{" "}
              <span
                className="hero__scene-one-text-first-bg"
                style={{
                  transform: "skew(-20deg, 0deg) scale(0, 1)",
                  transformOrigin: "right center",
                }}
              ></span>
            </div>
            <div className="hero__scene-one-text-second">
              <span
                className="hero__scene-one-text-word"
                style={{ opacity: "1" }}
              >
                digital and print publisher.
              </span>{" "}
              <span
                className="hero__scene-one-text-second-bg"
                style={{
                  transform: "skew(-20deg, 0deg) scale(0, 1)",
                  transformOrigin: "right center",
                }}
              ></span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 0.8,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.9,
              },
            },
          }}
          className="twoDiv"
        >
          <div className="hero__scene-two-text">
            <div className="hero__scene-two-text-first">
              <span
                className="hero__scene-two-text-word"
                style={{ opacity: "1" }}
              >
                The brands you <em>love.</em>
              </span>{" "}
              <span
                className="hero__scene-two-text-first-bg"
                style={{
                  transform: "skew(-20deg, 0deg) scale(0, 1)",
                  transformOrigin: "right center",
                }}
              ></span>
            </div>
            <div className="hero__scene-two-text-second">
              <span
                className="hero__scene-two-text-word"
                style={{ opacity: "1" }}
              >
                The experiences you <em>want.</em>
              </span>{" "}
              <span
                className="hero__scene-two-text-second-bg"
                style={{
                  transform: "skew(-20deg, 0deg) scale(0, 1)",
                  transformOrigin: "right center",
                }}
              ></span>
            </div>
            <div className="hero__scene-two-text-third">
              <span
                className="hero__scene-two-text-word"
                style={{ opacity: "1" }}
              >
                The answers you <em>need.</em>
              </span>{" "}
              <span
                className="hero__scene-two-text-third-bg"
                style={{
                  transform: "skew(-20deg, 0deg) scale(0, 1)",
                  transformOrigin: "right center",
                }}
              ></span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="video-block">
        {/* {console.log(props.props[0].attributes.slider.data[0].attributes.url)} */}
        <video autoPlay loop="loop" muted="muted" style={{ width: "100%" }}>
          <source
            src={`http://localhost:1337${props.props[0].attributes.slider.data[0].attributes.url}`}
          />
        </video>
      </div>
    </div>
  );
}

export default HomeSlider;
