import React from "react";
import { Container } from "@material-ui/core";
// import { Link } from "react-router-dom";
import {
  MailOutline,
  QueryBuilder,
  PhoneInTalk,
  ExpandMore,
  Search,
  Person,
  Favorite,
  ShoppingBasket,
  ExitToApp,
} from "@material-ui/icons";

import "./components/styled.scss";
import IconFlagEng from "../../assets/image/england.svg";
import IconFlagVietNam from "../../assets/image/vietnam.svg";

export default function Header() {
  return (
    <div className="wrapper-background-header">
      <Container className="wrapper-header">
        <div>
          <div className="wrapper-top-header">
            <div className="wrapper-information">
              <div className="wrapper-email wrapper-information-container">
                <MailOutline />
                <span className="text-information">E-mail</span>
              </div>
              <div className="wrapper-open-time wrapper-information-container">
                <QueryBuilder />
                <span className="text-information">8:30-21:00</span>
              </div>
              <div className="wrapper-phone wrapper-information-container">
                <PhoneInTalk />
                <span className="text-information">+8439 762 7706</span>
              </div>
            </div>
            <div className="wrapper-information-right">
              <div className="wrapper-language wrapper-information-container">
                <span>EN</span>
                <ExpandMore />
                <div className="wrapper-type-language">
                  <div className="wrapper-language-container">
                    <img
                      src={IconFlagEng}
                      alt="icon-flag"
                      className="icon-flag"
                    />
                    <span>English</span>
                  </div>
                  <div className="wrapper-language-container">
                    <img
                      src={IconFlagVietNam}
                      alt="icon-flag"
                      className="icon-flag"
                    />
                    <span>Tiếng Việt</span>
                  </div>
                </div>
              </div>
              <div className="wrapper-money-styled wrapper-information-container">
                <span>USD</span>
                <ExpandMore />
                <div className="wrapper-type-money">
                  <div className="wrapper-money-container">
                    <span>$ USA</span>
                  </div>
                  <div className="wrapper-money-container">
                    <span>€ EURO</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="wrapper-bottom-header">
            <div className="wrapper-logo">
              <div className="logo-center">
                <span className="text-logo name-logo">XYZ</span>
                <span className="text-logo">STORE</span>
              </div>
            </div>
            <div className="wrapper-menu">
              <div className="menu-center">
                <ul>
                  <li className="wrapper-type-menu">
                    <span className="text-menu home-menu">HOME</span>
                  </li>
                  <li className="wrapper-type-menu li-shop">
                    <span className="text-menu text-shop-menu">SHOP</span>
                    <ExpandMore className="icon-shop-menu" />
                    <div className="menu-shop-center">
                      <div className="wrapper-menu-shop">
                        <div className="menu-shop">
                          <span className="title-shop">SHOP PAGES</span>
                          <span className="menu-container">Shop Default</span>
                          <span className="menu-container">Shop List</span>
                          <span className="menu-container">Shop Ajax</span>
                          <span className="menu-container">
                            Shop Hidden Sidebar<span className="new">New</span>
                          </span>
                          <span className="menu-container">
                            Shop Filter Area<span className="new">New</span>
                          </span>
                        </div>
                        <div className="menu-shop">
                          <span className="title-shop">PRODUCT PAGES</span>
                          <span className="menu-container">Product Simple</span>
                          <span className="menu-container">
                            Product Grouped
                          </span>
                          <span className="menu-container">
                            Product Variable
                          </span>
                          <span className="menu-container">
                            Product On Sale
                          </span>
                          <span className="menu-container">
                            Product External
                          </span>
                          <span className="menu-container">
                            Product Top Banner
                          </span>
                          <span className="menu-container">
                            Product Extra Content
                          </span>
                          <span className="menu-container">
                            Product Grid Gallery<span className="new">New</span>
                          </span>
                        </div>
                        <div className="menu-shop">
                          <span className="title-shop">SHOP PAGES</span>
                          <span className="menu-container">Shop Default</span>
                          <span className="menu-container">Shop List</span>
                          <span className="menu-container">Shop Ajax</span>
                          <span className="menu-container">
                            Shop Hidden Sidebar<span className="new">New</span>
                          </span>
                          <span className="menu-container">
                            Shop Filter Area<span className="new">New</span>
                          </span>
                        </div>
                        <div className="menu-shop">
                          <span className="title-shop">SHOP PAGES</span>
                          <span className="menu-container">Shop Default</span>
                          <span className="menu-container">Shop List</span>
                          <span className="menu-container">Shop Ajax</span>
                          <span className="menu-container">
                            Shop Hidden Sidebar<span className="new">New</span>
                          </span>
                          <span className="menu-container">
                            Shop Filter Area<span className="new">New</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="wrapper-type-menu">
                    <span className="text-menu">MEGA MENU</span>
                    <ExpandMore />
                  </li>
                  <li className="wrapper-type-menu">
                    <span className="text-menu">VENDORS</span>
                    <ExpandMore />
                  </li>
                  <li className="wrapper-type-menu">
                    <span className="text-menu">BLOG</span>
                    <ExpandMore />
                  </li>
                </ul>
              </div>
            </div>
            <div className="wrapper-selection">
              <div className="selection-center">
                <div className="wrapper-search selection">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="input-search"
                  />
                  <Search className="icon-selection icon-search" />
                </div>
                <div className="wrapper-account selection">
                  <Person className="icon-selection icon-account" />
                  <div className="wrapper-login">
                    <div className="login-center">
                      <ExitToApp />
                      <span>Login - Register</span>
                    </div>
                  </div>
                </div>
                <div className="wrapper-product-love selection">
                  <Favorite className="icon-selection" />
                </div>
                <div className="wrapper-cart selection">
                  <div className="cart-center">
                    <ShoppingBasket className="icon-selection" />
                    <span>$ 0.00</span>
                  </div>
                  <div className="cart-down">
                    <ExpandMore />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
