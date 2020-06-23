import React from "react";
import { Container } from "@material-ui/core";
import { Link } from "react-router-dom";
import { DirectionsBike, ThumbsUpDown, LocalAtm } from "@material-ui/icons";

import Slide from "./components/Slide";
import "./components/Styled.scss";
import Slider from "./components/newSlide";
import BestProduct from "./components/BestProduct";
import SliderBrands from "./components/SlideBrands";
import CollectionNew from "./components/CollectionNew"
import AdvItem1 from "../../assets/image/adv-item-1.jpg";
import AdvItem2 from "../../assets/image/adv-item-2.jpg";
import AdvItem3 from "../../assets/image/adv-item-3.jpg";
import AdvItem4 from "../../assets/image/adv-item-4.jpg";
import AdvItem5 from "../../assets/image/adv-item-5.jpg";
import AdvItem6 from "../../assets/image/adv-item-6.jpg";

export default function Home() {
  return (
    <div>
      <Slide />
      <Container>
        <div className="wrapper-list-services">
          <div className="list-services">
            <div className="wrapper-item-services">
              <div className="item-services">
                <DirectionsBike className="item-services-icon" />
                <div className="item-services-text">
                  <p className="title-item-services">
                    FREE SHIPPING and RETURN
                  </p>
                  <p className="container-item-services">
                    Lorem ipsum dolor sit amet consectetu
                  </p>
                </div>
              </div>
            </div>
            <div className="wrapper-item-services">
              <div className="item-services">
                <ThumbsUpDown className="item-services-icon" />
                <div className="item-services-text">
                  <p className="title-item-services">MONEY BACK GUARANTEE</p>
                  <p className="container-item-services">
                    Lorem Ipsum has been the standard
                  </p>
                </div>
              </div>
            </div>
            <div className="wrapper-item-services">
              <div className="item-services">
                <LocalAtm className="item-services-icon" />
                <div className="item-services-text">
                  <p className="title-item-services">
                    RECEIVE GIFTS WHEN YOU SUBSCRIBE
                  </p>
                  <p className="container-item-services">
                    Lorem Ipsum has been the standard
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="wrapper-list-adv">
          <div className="list-adv">
            <div className="wrapper-adv-item">
              <div className="adv-item">
                <div className="wrapper-img-adv-item">
                  <Link to="/">
                    <img
                      className="image-adv-item image-adv-item-before"
                      src={AdvItem1}
                      alt="img-adv-item"
                    />
                    <img
                      className="image-adv-item image-adv-item-after"
                      src={AdvItem2}
                      alt="img-adv-item"
                    />
                  </Link>
                </div>
                <Link className="wrapper-text-adv-item" to="/">
                  <p className="text-adv-item">GIRL STYLE TREND</p>
                  <div className="border-bottom-adv-item" />
                </Link>
                <Link className="wrapper-link-adv-item" to="/">
                  SHOW NOW
                </Link>
              </div>
            </div>
            <div className="wrapper-adv-item">
              <div className="adv-item">
                <div className="wrapper-img-adv-item">
                  <Link to="/">
                    <img
                      className="image-adv-item-before"
                      src={AdvItem3}
                      alt="img-adv-item"
                    />
                    <img
                      className="image-adv-item-after"
                      src={AdvItem4}
                      alt="img-adv-item"
                    />
                  </Link>
                </div>
                <Link className="wrapper-text-adv-item" to="/">
                  <p className="text-adv-item">GIRL STYLE TREND</p>
                  <div className="border-bottom-adv-item" />
                </Link>
                <Link className="wrapper-link-adv-item" to="/">
                  SHOW NOW
                </Link>
              </div>
            </div>
            <div className="wrapper-adv-item">
              <div className="adv-item">
                <div className="wrapper-img-adv-item">
                  <Link to="/">
                    <img
                      className="image-adv-item-before"
                      src={AdvItem5}
                      alt="img-adv-item"
                    />
                    <img
                      className="image-adv-item-after"
                      src={AdvItem6}
                      alt="img-adv-item"
                    />
                  </Link>
                </div>
                <Link className="wrapper-text-adv-item" to="/">
                  <p className="text-adv-item">GIRL STYLE TREND</p>
                  <div className="border-bottom-adv-item" />
                </Link>
                <Link className="wrapper-link-adv-item" to="/">
                  SHOW NOW
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="wrapper-collection">
          <div className="collection">
            <CollectionNew />
            <div className="wrapper-collection-sale">
              <div className="collection-sale">
                <div className="collection-sale-top">
                  <p className="p">DEALS</p>
                  <p className="text-collection-sale-top">ON SALE</p>
                  <div className="border-bottom-sale-collection" />
                </div>
                <div className="collection-sale-bottom">
                  <div className="wrapper-slide-on-sale">
                    <div className="slide-on-sale">
                      <Slider />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="wrapper-brands">
          <div className="brands">
            <div className="wrapper-brands-top">
              <div className="brands-top">
                <p className="text-brands">OUR BRANDS</p>
                <div className="border-bottom-text-brands" />
              </div>
            </div>
            <div className="collection-brands-bottom">
              <SliderBrands />
            </div>
          </div>
        </div>

        <div className="wrapper-best-product">
          <div className="best-product">
            <div className="wrapper-best-product-top">
              <div className="best-product-top">
                <p className="text-best-product">BEST SELLERS PRODUCTS</p>
                <div className="border-bottom-text-best-product" />
              </div>
            </div>
            <div className="collection-best-product-bottom">
              <BestProduct />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
