import React, {Component } from 'react';
import './SixthContaints.css'
import CardLogo from "../../../images/Apple/cardLogo.png";
import StructureTwo from '../Containts/StructureTwo'
// 10025.jpg
class SixthContaint extends Component {
    
    render() { 
        return (
          <section className="sixth-heghlight-wrapper">
            <div className="container-fluid">
              <div className="row">
                <div className="left-side-wrapper col-sm-12 col-md-6">
                  <div className="left-side-container">
                    <div className="top-logo-wrapper">
                      <div className="logo-wrapper">
                        <img src={CardLogo} />
                      </div>
                    </div>
                    <div className="description-wraper ">
                      Get up to 3% Daily Cash back with every purchase.
                    </div>

                    <div className="links-wrapper">
                      <ul>
                        <li>
                          <a href="">Learn more</a>
                        </li>
                        <li>
                          <a href="">Apply now</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <StructureTwo
                  wrapperClass="right-side-wrapper"
                  innerClassName="right-side-container"
                  titleColor="white"
                  title="AirPods Pro"
                  description="Magic like you've never heard."
                  link="Learn more"
                >
                  <a href="">Buy</a>
                </StructureTwo>
              </div>
            </div>
          </section>
        );
    }
}
 
export default SixthContaint;