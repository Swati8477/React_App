import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer class="footer">
        <div class="container">
          <div class="row">
            <div class="footer-col">
              <h2>SUNFOX</h2>
              <p>
                Sunfox is Uttarakhand based Research and Development Lab with
                the aim of creating a better future.
                <br />
                <br />© 2021 Sunfox.in
              </p>
            </div>
            <div class="footer-col">
              <h4>HOME LINKS</h4>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">about us</a>
                </li>
                <li>
                  <a href="#">product</a>
                </li>
                <li>
                  <a href="#">team</a>
                </li>
                <li>
                  <a href="#">career</a>
                </li>
                <li>
                  <a href="#">contact</a>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>other</h4>
              <ul>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Term and Conditions</a>
                </li>
                <li>
                  <a href="#">return policy</a>
                </li>
                <li>
                  <a href="#">service center</a>
                </li>
                <li>
                  <a href="#">tracking order</a>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>Become a partner</h4>
              <ul>
                <li>
                  <a href="#">E-health Platform</a>
                </li>
                <li>
                  <a href="#">TeleMedicines</a>
                </li>
                <li>
                  <a href="#">Distributions and Resellers</a>
                </li>
              </ul>
              {/* <div class="footer-col center"> */}
              <h4 class="center">For Business Enquiry</h4>
              <div class="social-links">
                <a href="#">
                  <i class="fas fa-phone-volume"></i>
                </a>
                <a href="#">
                  <i class="fas fa-headphones-alt"></i>
                </a>
                <a href="#">
                  <i class="fas fa-comments"></i>
                </a>
                <a href="#">
                  <i class="fab fa-linkedin-in"></i>
                </a>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
