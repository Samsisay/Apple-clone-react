import React, {Component} from 'react';
import './FifthContaint.css'
import iPadAirLogo from "../../../images/Apple/10023.png"
import WatchSeries7Logo from "../../../images/Apple/10043.png"
import tvtitle from "../../../images/icons/tv-title-large.png"

class FiftyComponent extends Component {
    
    render() { 
        return (
          <section className="fifth-heghlight-wrapper">
            <div className="container-fluid">
              <div className="row">
                <div className="left-side-wrapper col-sm-12 col-md-6">
                  <div className="left-side-container">
                    <div className="top-logo-wrapper">
                      <div className="logo-wrapper">
                        <img src={iPadAirLogo} />
                      </div>
                    </div>

                    {/* <div className="tvshow-logo-wraper">
                      <img src={tvtitle} />
                    </div> */}
                    <div className="description-wraper white">
                      Light. Bright. Full of might.
                    </div>

                    <div className="links-wrapper">
                      <ul>
                        <li>
                          <a href="">Learn more</a>
                        </li>
                        <li>
                          <a href="">Buy</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="right-side-wrapper col-sm-12 col-md-6">
                  <div className="right-side-container">
                    <div className="top-logo-wrapper">
                      <div className="logo-wrapper">
                        <img src={WatchSeries7Logo} />
                      </div>
                    </div>
                    <div className="description-wraper">
                      It's our largest display yet.
                    </div>
                    <div className="links-wrapper">
                      <ul>
                        <li>
                          <a href="">Learn more</a>
                        </li>
                        <li>
                          <a href="">Buy</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
    }
}
 
export default FiftyComponent;