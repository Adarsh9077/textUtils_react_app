// import { useState } from "react";
import React from "react";

export default function About(props) {
  // const [myStyle, setMyStyle] = useState({
  //   backgroundColor: "#fff",
  //   color: "#000",
  // });
  // const [btnText, setBtnText] = useState("Enable Dark Mode");
  let myStyle = {
    color: props.mode === "dark" ? "white" : "#000000",
    backgroundColor: props.mode === "dark" ? "grey" : "#fff",
  };
  return (
    <>
      <section id="about-us" className="about-us-page" style={myStyle}>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="about-us-heading-txt" style={myStyle}>
                <h1 className="my-3">About Us</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  recusandae repellat reiciendis est officiis sint consequatur
                  aliquam quod.
                </p>
              </div>
            </div>
            <div className="col-md-12">
              <div className="about-us-content">
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                        style={myStyle}
                      >
                        Accordion Item #1
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body" style={myStyle}>
                        <strong>
                          This is the first item’s accordion body.
                        </strong>{" "}
                        It is shown by default, until the collapse plugin adds
                        the appropriate classes that we use to style each
                        element. These classes control the overall appearance,
                        as well as the showing and hiding via CSS transitions.
                        You can modify any of this with custom CSS or overriding
                        our default variables. It’s also worth noting that just
                        about any HTML can go within the{" "}
                        <code>.accordion-body</code>, though the transition does
                        limit overflow.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                        style={myStyle}
                      >
                        Accordion Item #2
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body" style={myStyle}>
                        <strong>
                          This is the second item’s accordion body.
                        </strong>{" "}
                        It is hidden by default, until the collapse plugin adds
                        the appropriate classes that we use to style each
                        element. These classes control the overall appearance,
                        as well as the showing and hiding via CSS transitions.
                        You can modify any of this with custom CSS or overriding
                        our default variables. It’s also worth noting that just
                        about any HTML can go within the{" "}
                        <code>.accordion-body</code>, though the transition does
                        limit overflow.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                        style={myStyle}
                      >
                        Accordion Item #3
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body" style={myStyle}>
                        <strong>
                          This is the third item’s accordion body.
                        </strong>{" "}
                        It is hidden by default, until the collapse plugin adds
                        the appropriate classes that we use to style each
                        element. These classes control the overall appearance,
                        as well as the showing and hiding via CSS transitions.
                        You can modify any of this with custom CSS or overriding
                        our default variables. It’s also worth noting that just
                        about any HTML can go within the{" "}
                        <code>.accordion-body</code>, though the transition does
                        limit overflow.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
