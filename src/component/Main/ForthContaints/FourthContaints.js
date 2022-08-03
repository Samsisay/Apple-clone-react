import React, { Component } from "react";
import "./FourthContaints.css";
import StructureTwo from "../Containts/StructureTwo";
import supercharged from "../../../images/Apple/10019.png";

class ForthContaint extends Component {
  render() {
    return (
      <section className="fourth-heghlight-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div></div>
            <StructureTwo
              wrapperClass="left-side-wrapper"
              innerClassName="left-side-container"
              title="iPhone 13 Pro"
              description="Oh. So. Pro."
              // price="From $18.70/mo. or $499 with trade‑in." 
              link="Learn more"
            >
              <a href="">Buy</a>
            </StructureTwo>
            <div></div>

            <StructureTwo
              wrapperClass="right-side-wrapper"
              innerClassName="right-side-container"
              titleColor="white"
              title="MacBook Pro 13"
              link="Learn more"
            >
              <div className="supercharged">
                <img src={supercharged} />
              </div>
              <a href="">Buy</a>
            </StructureTwo>
          </div>
        </div>
      </section>
    );
  }
}

export default ForthContaint;


