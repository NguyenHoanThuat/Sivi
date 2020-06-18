import React, { useState } from "react";
import { Container } from "@material-ui/core";
import { Link } from "react-router-dom";
import { DirectionsBike, ThumbsUpDown, LocalAtm } from "@material-ui/icons";

import Slide from "./components/Slide";
import "./components/Styled.scss";
import Slider from "./components/newSlide"
import AdvItem1 from "../../assets/image/adv-item-1.jpg";
import AdvItem2 from "../../assets/image/adv-item-2.jpg";
import AdvItem3 from "../../assets/image/adv-item-3.jpg";
import AdvItem4 from "../../assets/image/adv-item-4.jpg";
import AdvItem5 from "../../assets/image/adv-item-5.jpg";
import AdvItem6 from "../../assets/image/adv-item-6.jpg";
import ListCollectionNew1 from "../../assets/image/list-collection-new-1.jpg";
import ListCollectionNew2 from "../../assets/image/list-collection-new-2.jpg";
import ListCollectionNew3 from "../../assets/image/list-collection-new-3.jpg";
import ListCollectionNew4 from "../../assets/image/list-collection-new-4.jpg";
import ImgProductItem1 from "../../assets/image/img-product-item-1.jpg";
import ImgProductItem2 from "../../assets/image/img-product-item-2.jpg";
import ImgProductItem3 from "../../assets/image/img-product-item-3.jpg";
import ImgProductItem4 from "../../assets/image/img-product-item-4.jpg";
import ImgProductItem5 from "../../assets/image/img-product-item-5.jpg";
import ImgProductItem6 from "../../assets/image/img-product-item-6.jpg";
import ImgProductItem7 from "../../assets/image/img-product-item-7.jpg";
import ImgProductItem8 from "../../assets/image/img-product-item-8.jpg";
import ImgSlideSale1 from "../../assets/image/img-slide-1.jpg"
import ImgSlideSale2 from "../../assets/image/img-slide-2.jpg"
import ImgSlideSale3 from "../../assets/image/img-slide-3.jpg"

export default function Home() {
  const [newCollection, setNewCollection] = useState(ImgProductItem1);
  const [newCollection2, setNewCollection2] = useState(ImgProductItem2);

  const onClickCollection1 = () => {
    setNewCollection(ImgProductItem1);
    setNewCollection2(ImgProductItem2);
  };

  const onClickCollection2 = () => {
    setNewCollection(ImgProductItem3);
    setNewCollection2(ImgProductItem4);
  };

  const onClickCollection3 = () => {
    setNewCollection(ImgProductItem5);
    setNewCollection2(ImgProductItem6);
  };

  const onClickCollection4 = () => {
    setNewCollection(ImgProductItem7);
    setNewCollection2(ImgProductItem8);
  };

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
            <div className="wrapper-collection-new">
              <div className="collection-new">
                <div className="collection-new-top">
                  <p className="text-collection-new-top">NEW COLLECTION</p>
                  <div className="border-bottom-new-collection" />
                </div>
                <div className="collection-new-bottom">
                  <div className="collection-new-bottom-left">
                    <button
                      onClick={onClickCollection1}
                      className="img-list-product-new"
                    >
                      <img src={ListCollectionNew1} alt="" />
                    </button>
                    <button
                      onClick={onClickCollection2}
                      className="img-list-product-new"
                    >
                      <img src={ListCollectionNew2} alt="" />
                    </button>
                    <button
                      onClick={onClickCollection3}
                      className="img-list-product-new"
                    >
                      <img src={ListCollectionNew3} alt="" />
                    </button>
                    <button
                      onClick={onClickCollection4}
                      className="img-list-product-new"
                    >
                      <img src={ListCollectionNew4} alt="" />
                    </button>
                  </div>
                  <div className="collection-new-bottom-right">
                    <div className="wrapper-img-product-new">
                      <Link className="img-product-new" to="/">
                        <img
                          className="img-product-before"
                          src={newCollection}
                          alt=""
                        />
                        <img
                          className="img-product-after"
                          src={newCollection2}
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="wrapper-product-new">
                      <div className="product-new">
                        <p className="title-product">PRODUCT SEXY GIRLS</p>
                        <p className="description-product">
                          The history of T-shirt is very interesting. The
                          T-shirt has been a part of clothing since ancient
                          Egypt. A type of modern T-shirt was developed in
                          England in the end of 19th century. The idea of a
                          T-shirt came to the USA during the
                        </p>
                        <p className="title-product">SHOP THIS STYLE</p>
                        <div className="wrapper-list-product-item">
                          <div className="list-product-item">
                            <Link className="img-product-item" to="/">
                              <img src={ListCollectionNew4} alt="" />
                            </Link>
                          </div>
                          <div className="list-product-item">
                            <Link className="img-product-item" to="/">
                              <img src={ListCollectionNew4} alt="" />
                            </Link>
                          </div>
                          <div className="list-product-item">
                            <Link className="img-product-item" to="/">
                              <img src={ListCollectionNew4} alt="" />
                            </Link>
                          </div>
                          <div className="list-product-item">
                            <Link className="img-product-item" to="/">
                              <img src={ListCollectionNew4} alt="" />
                            </Link>
                          </div>
                        </div>
                        <Link className="wrapper-link-product-item" to="/">
                          VIEW MORE LOOKS
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
                      <div className="slide-1">
                        <div className="container-slide">
                          <img src={ImgSlideSale1} alt="" />
                        </div>
                        <div className="container-slide">
                          <img src={ImgSlideSale2} alt="" />
                        </div>
                        <div className="container-slide">
                          <img src={ImgSlideSale3} alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="switch-slide">
                      <button className="click-slide-1" />
                      <button className="click-slide-2" />
                      <button className="click-slide-3" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div >
        <Slider />
      </div>
    </div>
  );
}
