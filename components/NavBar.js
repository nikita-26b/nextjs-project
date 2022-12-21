import React from "react";
// import Link from "next/link";
import { BsCart3 } from "react-icons/bs";

function NavBar(props) {
  return (
    <nav className="navBar">
      <header className="page-header">
        <div className="panel wrapper">
          <div className="panel header">
            <ul className="header links header-cms-links">
              <li>
                <a href="http://localhost:3000/contact/">Contact</a>
              </li>
              <li>
                <a href="http://localhost:3000/about-us/">About us</a>
              </li>
              <li>
                <a href="http://localhost:3000/faq/">FAQ</a>
              </li>
            </ul>
            <ul className="header links sign-in">
              <li className="link authorization-link" data-label="or">
                <a href="http://localhost:3000/sign-in">Sign In</a>
              </li>
              <li>
                <a
                  href="http://localhost:3000/create-an-account/"
                  id="idbwYzul57"
                >
                  Create an Account
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="header wrapper">
          <div className="header content">
            <a
              className="logo"
              href="http://localhost:3000/"
              title="WOW RX Pharmacy"
            >
              {" "}
              <img
                src="https://www.wowrxpharmacy.com/pub/media/logo/stores/1/WOW_RX_Pharmacy_logo3_1_.svg"
                title="WOW RX Pharmacy"
                alt="WOW RX Pharmacy"
                width="250"
                height="60"
                style={{ marginBottom: "-24px" }}
              />
            </a>

            <div className="sections nav-sections">
              <nav
                className="swissup-navigationpro navpro navigation orientation-horizontal dropdown-level0-stick-center dropdown-right dropdown-bottom navpro-transformable"
                data-action="navigation"
              >
                <ul
                  id="navpro-topnav"
                  className="navpro-menu navpro-nowrap-offset-100 ui-menu ui-widget ui-widget-content"
                  data-mage-init-lazy='{"navpro":{"level0":{"position":{"my":"center top","at":"center bottom"}},"position":{"my":"left top","at":"right top"}}}'
                  role="menu"
                  tabIndex="0"
                >
                  <li
                    className="li-item level0 nav-1 size-xlarge first level-top navpro-home ui-menu-item"
                    role="presentation"
                  >
                    {props.props.attributes.title.map((link) => {
                      return (
                        <>
                          <a
                            href={link.url}
                            className="level-top ui-corner-all"
                            id="ui-id-1"
                            tabIndex="-1"
                            role="menuitem"
                            key={link.id}
                          >
                            <span>{link.label}</span>
                          </a>
                        </>
                      );
                    })}
                  </li>
                </ul>
                <div className="navpro-mobile"></div>
              </nav>
            </div>

            <div className="block block-search block-swissup-ajaxsearch move-box">
              <input
                type="search"
                className="search-box"
                placeholder="Search here"
              />
            </div>

            <div className="block-content-number move-box">
              <div className="contact-details">
                <strong>
                  {" "}
                  <i className="fa fa-phone"></i>
                </strong>{" "}
                <a href="tel:+1(844)443-3220%20" style={{ color: "#000000b0" }}>
                  {" "}
                  +1(844) 443-3220
                </a>
              </div>
              <div className="contact-details">
                <strong>
                  {" "}
                  <i className="fa fa-whatsapp"></i>
                </strong>{" "}
                <a
                  href="https://api.whatsapp.com/send?phone=389%2071%20668%20872&amp;text=Hi%20Wow%20Rx%20Pharmacy%20Team"
                  style={{ color: "#000000b0" }}
                  target="_blank"
                >
                  +389 71 668 872
                </a>
              </div>
            </div>

            <div data-block="minicart" className="minicart-wrapper move-box">
              <a
                className="action showcart"
                href="#"
                data-bind="scope: 'minicart_content'"
              >
                <span className="text">My Cart</span>
                <BsCart3 />
                <span
                  className="counter qty empty"
                  data-bind="css: { empty: !!getCartParam('summary_count') == false &amp;&amp; !isLoading() }, blockLoader: isLoading"
                >
                  <span className="counter-number"></span>
                  <span className="counter-label"></span>
                </span>
              </a>
              <div
                tabIndex="-1"
                role="dialog"
                className="ui-dialog ui-corner-all ui-widget ui-widget-content ui-front mage-dropdown-dialog"
                aria-describedby="ui-id-45"
                style={{ display: "none" }}
              >
                <div
                  className="block block-minicart ui-dialog-content ui-widget-content"
                  data-role="dropdownDialog"
                  id="ui-id-45"
                  style={{ display: "block" }}
                >
                  <div
                    id="minicart-content-wrapper"
                    data-bind="scope: 'minicart_content'"
                  >
                    <div className="block-title">
                      <strong>
                        <span className="text" data-bind="i18n: 'My Cart'">
                          My Cart
                        </span>
                        <span
                          className="qty empty"
                          data-bind="css: { empty: !!getCartParam('summary_count') == false },
                           attr: { title: $t('Items in Cart') }, text: getCartParam('summary_count')"
                          title="Items in Cart"
                        ></span>
                      </strong>
                    </div>
                    <div className="block-content">
                      <button
                        type="button"
                        id="btn-minicart-close"
                        className="action close"
                        data-action="close"
                        data-bind="
                           attr: {
                           title: $t('Close')
                           },
                           click: closeMinicart()
                           "
                        title="Close"
                      >
                        <span data-bind="i18n: 'Close'">Close</span>
                      </button>
                      <strong
                        className="subtitle empty"
                        data-bind="i18n: 'You have no items in your shopping cart.'"
                      >
                        You have no items in your shopping cart.
                      </strong>
                      <div
                        id="minicart-widgets"
                        className="minicart-widgets"
                      ></div>
                    </div>
                  </div>
                  <div className="widget block block-testimonials empty-design">
                    <div className="block-title">
                      <strong>Store Review</strong>
                    </div>
                    <div className="block-content">
                      <span itemScope="" itemType="http://schema.org/Store">
                        <div
                          itemProp="aggregateRating"
                          itemScope=""
                          itemType="http://schema.org/AggregateRating"
                          className="review"
                        >
                          <div itemProp="ratingValue" className="score">
                            5.00
                          </div>
                          <div className="score-info">
                            {" "}
                            out of 5 (<span itemProp="ratingCount">7</span>{" "}
                            votes)
                          </div>
                        </div>
                        <meta itemProp="name" content="WowRxPharmacy" />
                        <meta
                          itemProp="image"
                          content="https://www.wowrxpharmacy.com/pub/media/logo/stores/1/WOW_RX_Pharmacy_logo3_1_.svg"
                        />
                        <meta itemProp="address" content="" />
                        <meta itemProp="telephone" content="+1(844) 443-3220" />
                        <meta itemProp="priceRange" content="$$$" />
                      </span>
                      <div className="actions-toolbar">
                        <div className="secondary">
                          <a
                            className="action"
                            href="https://www.wowrxpharmacy.com/testimonials/"
                          >
                            <span>View all testimonials</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </nav>
  );
}

export default NavBar;
