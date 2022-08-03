import React, {Component}from "react"
import "./FirstContaint.css";
import Structure from "../Containts/Structure";
import supercharge from "../../../images/Apple/logo_hero_macbookair__edl9uovq56wm_medium.png";

class FirstContaint extends Component {
    render() { 
        return (
          <section className="first-hightlight-wrapper">
            <Structure
              titleColor="black"
              title="MacBook Air"
              colorClass="black"
            />

            {/* <div className="ipod-caption row">
					<div className="col-sm-12 col-md-6 text-md-right">iPad Pro available starting 3.25</div>
					<div className="col-sm-12 col-md-6 text-md-left">Magic Keyboard coming in May</div>
					
				</div> */}
            <div className="supercharge">
              <img src={supercharge} />
            </div>
          </section>
        );     
    }
}
 
export default FirstContaint;


