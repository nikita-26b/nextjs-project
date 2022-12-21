import React from "react";

function Footer() {
  return (
    <>
      <footer class="page-footer">
        <div class="footer content">
          <div
            data-content-type="html"
            data-appearance="default"
            data-element="main"
            data-decoded="true"
          >
            <div class="argento-grid">
              <div class="foot">
                <div class="h4">Company Info</div>
                <ul class="footer links argento-grid">
                  <li>
                    <ul>
                      <li>
                        <a href="http://localhost:3000/" target="_blank">
                          How WoWRxPharmacy work
                        </a>
                      </li>
                      <li>
                        <a href="http://localhost:3000/" target="_blank">
                          Why Choose WowRxPharmacy
                        </a>
                      </li>
                      <li>
                        <a href="http://localhost:3000/" target="_blank">
                          Generic Drugs
                        </a>
                      </li>
                      <li>
                        <a href="http://localhost:3000/" target="_blank">
                          Know about Indian Pharmacy
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div class="foot">
                <div class="h4">Customer Support</div>
                <ul class="footer links argento-grid">
                  <li>
                    <ul>
                      <li>
                        <a href="http://localhost:3000/" target="_blank">
                          Customer Service
                        </a>
                      </li>
                      <li>
                        <a href="http://localhost:3000/" target="_blank">
                          FAQ
                        </a>
                      </li>
                      <li>
                        <a href="http://localhost:3000/" target="_blank">
                          How To Pay
                        </a>
                      </li>
                      <li>
                        <a href="http://localhost:3000/" target="_blank">
                          Shipping and Return
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div class="foot">
                <div class="h4">Policy Info</div>
                <ul class="footer links argento-grid">
                  <li>
                    <ul>
                      <li>
                        <a href="http://localhost:3000/" target="_blank">
                          Privacy Policy
                        </a>
                      </li>
                      <li>
                        <a href="http://localhost:3000/" target="_blank">
                          Disclaimer
                        </a>
                      </li>
                      <li>
                        <a href="http://localhost:3000/" target="_blank">
                          Shipping and Return
                        </a>
                      </li>
                      <li>
                        <a href="http://localhost:3000/" target="_blank">
                          Terms and Conditions
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div class="foot">
                <div class="h4">Get in Touch</div>
                <ul class="footer links argento-grid">
                  <li>
                    <ul>
                      <li>
                        <a href="tel:+1(844)443-3220%20" target="_blank">
                          +1(844) 443-3220
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://api.whatsapp.com/send?phone=389%2071%20668%20872&amp;text=Hi%20NEXT.JS%20BLOGS%20Team"
                          target="_blank"
                        >
                          + 389 71 668 872
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          support@wowrxpharmacy.com
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div class="news-letter">
                <div class="block newsletter">
                  <div class="content">
                    <form
                      class="form subscribe"
                      novalidate="novalidate"
                      action="https://wow.wowrxpharmacy.com/newsletter/subscriber/new/"
                      method="post"
                      id="newsletter-validate-detail"
                    >
                      <strong>Newsletter</strong>
                      <label for="newsletter">
                        <input
                          name="email"
                          type="email"
                          id="newsletter"
                          placeholder="Enter your email address"
                          data-validate="{required:true, 'validate-email':true}"
                        />
                      </label>
                      <button
                        class="action subscribe primary"
                        title="Subscribe"
                        type="submit"
                        aria-label="Subscribe"
                      >
                        Subscribe
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="page-container footer-toolbar footer-toolbar-bottom">
          <div class="content">
            <small class="copyright">
              <span>
                Copyright © 2022-Wow RxPharmacy, Inc. All rights reserved.
              </span>
            </small>
            <ul class="footer links bottom-div">
              <li class="copyright-page">
                <a href="http://localhost:3000/">Privacy and Cookie Policy</a>
              </li>
              <li class="copyright-page">
                <a href="http://localhost:3000/">Search Terms</a>
              </li>
              <li class="copyright-page">
                <a href="http://localhost:3000/" data-action="advanced-search">
                  Advanced Search
                </a>
              </li>
              <li class="copyright-page">
                <a href="http://localhost:3000/">Orders and Returns</a>
              </li>
              <li class="copyright-page">
                <a href="http://localhost:3000/contact">Contact Us</a>
              </li>
              <li class="copyright-page">
                <a href="http://localhost:3000/">Testimonials</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
