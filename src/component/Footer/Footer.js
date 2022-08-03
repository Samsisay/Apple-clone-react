import React, { Component } from "react";
import FlagIcon from "../../images/icons/16.png";
    import $ from 'jquery';

import "./Footer.css";
import "./Toggel.js";

class Footer extends Component {

    componentDidMount() {
        // if ($(window).width() <= 768) {
        //   $(".footer-links-wrapper").addClass("someClass");
        // } else {
        //   $(".footer-links-wrapper").removeClass("someClass");
        // }
        $(window).on("resize", function (event) {
          if ($(window).width() <= 768) {
            $(".footer-links-wrapper").addClass("someClass");
          } else {
            $(".footer-links-wrapper").removeClass("someClass");
            $(".footer-links-wrapper ul").show();
          }
        });

        // Footer collapse functionality
        $(document).on("click", ".someClass h3", function () {
          $(this).next("ul").slideToggle();
          $(this).toggleClass("expanded");
        });
    }

  render() {
    return (
      <footer className="footer-wrapper">
        <div className="container">
          <div className="upper-text-container">
            <p>
              1. Qualified Purchasers receive an Apple Gift Card when they
              purchase an eligible Mac or iPad at a Qualifying Location. Only
              one Apple Gift Card per eligible Mac or iPad per Qualified
              Purchaser. Offer subject to availability. While supplies last.
              Qualified Purchasers shall receive a discount equal to the value
              of the Apple Gift Card off the price of the eligible Mac or iPad,
              but will be charged for all items in their cart, including the
              Apple Gift Card. Important notice regarding the checkout receipt
              and monthly statement for Apple Card Monthly Installment (ACMI)
              purchases with this promotion: Qualified Purchasers selecting ACMI
              (a 0% APR payment option) as payment type at checkout shall
              receive a discount equal to the value of the Apple Gift Card off
              the price of the eligible Mac or iPad. This will result in one
              ACMI installment plan over 12 months for the eligible iPad or Mac
              discounted by the instant credit, and a second ACMI installment
              plan over 12 months for the full price of the Apple Gift Card. The
              total combined amount charged over the two separate ACMI
              installment plans will reflect the original full retail price of
              the Eligible Product. Separately, Qualified Purchasers will
              receive and be charged for the Apple Gift Card in the amount of
              the applicable discount off the eligible Mac or iPad. ACMI is
              subject to credit approval and credit limit. Variable APRs for
              Apple Card other than ACMI range from 12.49% to 23.49% based on
              creditworthiness. Rates as of July 1, 2022. If you choose the
              pay‑in‑full or one‑time‑payment option for an ACMI‑eligible
              purchase instead of choosing ACMI as the payment option at
              checkout, that purchase will be subject to the variable APR
              assigned to your Apple Card. Taxes and shipping are not included
              in ACMI transactions and are subject to your standard purchase
              APR. See the Apple Card Customer Agreement at
              <a href="#">
                {" "}
                https://www.goldmansachs.com/terms-and-conditions/Apple-Card-Customer-Agreement.pdf
              </a>{" "}
              for more information. ACMI is not available for purchases made
              online at the following special stores: Apple Employee Purchase
              Plan; participating corporate Employee Purchase Programs; Apple at
              Work for small businesses; Government, and Veterans and Military
              Purchase Programs, or on refurbished devices. Apple Card is issued
              by Goldman Sachs Bank USA, Salt Lake City Branch. Available for
              qualifying applicants in the United States. If you reside in the
              U.S. territories, please call Goldman Sachs at 877-255-5923 with
              questions about accessing this offer or applying for Apple Card.
              This offer cannot be combined with the Apple Employee Purchase
              Plan or business loyalty pricing. Availability of in‑store
              promotion offerings may be limited by Apple Store location
              closures as a result of COVID‑19. Additional restrictions apply.
              View full terms and conditions of offer here.
            </p>
            <p>
              To access and use all the features of Apple Card, you must add
              Apple Card to Wallet on an iPhone or iPad with the latest version
              of iOS or iPadOS. Update to the latest version by going to
              Settings > General > Software Update. Tap Download and Install.
            </p>
            <p>Available for qualifying applicants in the United States.</p>
            <p>
              Apple Card is issued by Goldman Sachs Bank USA, Salt Lake City
              Branch.
            </p>
            <p>
              Learn more about how Apple Card applications are evaluated at
              <a href="#"> support.apple.com/kb/HT209218</a>.
            </p>
            <p>
              Major League Baseball trademarks and copyrights are used with
              permission of MLB Advanced Media, L.P. All rights reserved.
            </p>
          </div>
          <div className="footer-links-wrapper row">
            <div className="links-wrapper-1 col-sm-12 col-md">
              <h3>Shop and Learn</h3>
              <ul>
                <li>
                  <a href="">Store</a>
                </li>
                <li>
                  <a href="">Mac</a>
                </li>
                <li>
                  <a href="">iPad</a>
                </li>
                <li>
                  <a href="">iPhone</a>
                </li>
                <li>
                  <a href="">Watch</a>
                </li>
                <li>
                  <a href="">AirPods</a>
                </li>
                <li>
                  <a href="#">TV & Home</a>
                </li>
                <li>
                  <a href="#">AirTag</a>
                </li>
                <li>
                  <a href="#">Accessories</a>
                </li>
                <li>
                  <a href="#">Gift Cards</a>
                </li>
              </ul>
            </div>
            <div className="links-wrapper-2 col-sm-12 col-md">
              <h3>Services</h3>
              <ul>
                <li>
                  <a href="#">Apple Music</a>
                </li>
                <li>
                  <a href="#">Apple TV+</a>
                </li>
                <li>
                  <a href="#">Apple Fitness+</a>
                </li>
                <li>
                  <a href="#">Apple News+</a>
                </li>
                <li>
                  <a href="#">Apple Arcade</a>
                </li>
                <li>
                  <a href="#">iCloud</a>
                </li>
                <li>
                  <a href="#">Apple One</a>
                </li>
                <li>
                  <a href="#">Apple Card</a>
                </li>
                <li>
                  <a href="#">Apple Books</a>
                </li>
                <li>
                  <a href="#">Apple Podcasts</a>
                </li>
                <li>
                  <a href="#">App Store</a>
                </li>
              </ul>
              <h3>Account</h3>
              <ul>
                <li>
                  <a href="#">Manage Your Apple ID</a>
                </li>
                <li>
                  <a href="#">Apple Store Account</a>
                </li>
                <li>
                  <a href="#">iCloud.com</a>
                </li>
              </ul>
            </div>
            <div className="links-wrapper-3 col-sm-12 col-md">
              <h3>Apple Store</h3>
              <ul>
                <li>
                  <a href="#">Find a Store</a>
                </li>
                <li>
                  <a href="#">Genius Bar</a>
                </li>
                <li>
                  <a href="#">Today at Apple</a>
                </li>
                <li>
                  <a href="#">Apple Camp</a>
                </li>
                <li>
                  <a href="#">Apple Store App</a>
                </li>
                <li>
                  <a href="#">Refurbished and Clearance</a>
                </li>
                <li>
                  <a href="#">Financing</a>
                </li>
                <li>
                  <a href="#">Apple Trade In</a>
                </li>
                <li>
                  <a href="#">Order Status</a>
                </li>
                <li>
                  <a href="#">Shopping Help</a>
                </li>
              </ul>
            </div>
            <div className="links-wrapper-4 col-sm-12 col-md">
              <h3>For Business</h3>
              <ul>
                <li>
                  <a href="#">Apple and Business</a>
                </li>
                <li>
                  <a href="#">Shop for Business</a>
                </li>
              </ul>
              <h3>For Education</h3>
              <ul>
                <li>
                  <a href="#">Apple and Education</a>
                </li>
                <li>
                  <a href="#">Shop for K-12</a>
                </li>
                <li>
                  <a href="#">Shop for College</a>
                </li>
              </ul>
              <h3>For Healthcare</h3>
              <ul>
                <li>
                  <a href="#">Apple in Healthcare</a>
                </li>
                <li>
                  <a href="#">Health on Apple Watch</a>
                </li>
                <li>
                  <a href="#">Health Records on iPhone</a>
                </li>
              </ul>
              <h3>For Government</h3>
              <ul>
                <li>
                  <a href="#">Shop for Government</a>
                </li>
                <li>
                  <a href="#">Shop for Veterans and Military</a>
                </li>
              </ul>
            </div>
            <div className="links-wrapper-5 col-sm-12 col-md">
              <h3>Apple Values</h3>
              <ul>
                <li>
                  <a href="#">Accessibility</a>
                </li>
                <li>
                  <a href="#">Education</a>
                </li>
                <li>
                  <a href="#">Environment</a>
                </li>
                <li>
                  <a href="#">Inclusion and Diversity</a>
                </li>
                <li>
                  <a href="#">Privacy</a>
                </li>
                <li>
                  <a href="#">Racial Equity and Justice</a>
                </li>
                <li>
                  <a href="#">Supplier Responsibility</a>
                </li>
              </ul>
              <h3>About Apple</h3>
              <ul>
                <li>
                  <a href="#">Newsroom</a>
                </li>
                <li>
                  <a href="#">Apple Leadership</a>
                </li>
                <li>
                  <a href="#">Career Opportunities</a>
                </li>
                <li>
                  <a href="#">Investors</a>
                </li>
                <li>
                  <a href="#">Ethics and Compliance</a>
                </li>
                <li>
                  <a href="#">Events</a>
                </li>
                <li>
                  <a href="#">Contact Apple</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="my-apple-wrapper">
            More ways to shop: <a href="#">Find an Apple Store</a> or{" "}
            <a href="#">other retailer</a> near you. Or call 1-800-MY-APPLE.
          </div>
          <div className="copyright-wrapper row">
            <div className="copyright col-sm-12 order-2 col-md-8 order-md-1 col-lg-4 order-lg-1">
              Copyright &copy; 2022 Apple Inc. All rights reserved.
            </div>
            <div className="footer-links-terms  col-sm-12 order-3 col-lg-6 order-lg-2">
              <ul>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms of Use</a>
                </li>
                <li>
                  <a href="#">Sales and Refunds</a>
                </li>
                <li>
                  <a href="#">Legal</a>
                </li>
                <li>
                  <a href="#">Site Map</a>
                </li>
              </ul>
            </div>
            <div className="footer-country  col-sm-12 order-1 col-md-4 order-md-2 text-md-right col-lg-2 order-lg-3">
              <div className="flag-wrapper">
                <img src={FlagIcon} />
              </div>{" "}
              <div className="footer-country-name">United States</div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
