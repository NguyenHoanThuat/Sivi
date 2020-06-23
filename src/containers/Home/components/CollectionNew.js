import React, { useState } from "react";
import { Link } from "react-router-dom";

import SlideNewCollection1 from "./SlideNewCollection1";
import ListCollectionNew1 from "../../../assets/image/list-collection-new-1.jpg";
import ListCollectionNew2 from "../../../assets/image/list-collection-new-2.jpg";
import ListCollectionNew3 from "../../../assets/image/list-collection-new-3.jpg";
import ListCollectionNew4 from "../../../assets/image/list-collection-new-4.jpg";
import ImgProductItem1 from "../../../assets/image/img-product-item-1.jpg";
import ImgProductItem2 from "../../../assets/image/img-product-item-2.jpg";
import ImgProductItem3 from "../../../assets/image/img-product-item-3.jpg";
import ImgProductItem4 from "../../../assets/image/img-product-item-4.jpg";
import ImgProductItem5 from "../../../assets/image/img-product-item-5.jpg";
import ImgProductItem6 from "../../../assets/image/img-product-item-6.jpg";
import ImgProductItem7 from "../../../assets/image/img-product-item-7.jpg";
import ImgProductItem8 from "../../../assets/image/img-product-item-8.jpg";

export default function CollectionNew() {
  const [onClickCollection, setOnClickCollection] = useState(0);

  const onClickCollection1 = () => {
    setOnClickCollection(0);
  };

  const onClickCollection2 = () => {
    setOnClickCollection(1);
  };

  const onClickCollection3 = () => {
    setOnClickCollection(2);
  };

  const onClickCollection4 = () => {
    setOnClickCollection(3);
  };

  return (
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
            

            {onClickCollection === 0 ? (
              <div className="wrapper-img-product-new">
              <Link className="img-product-new" to="/">
                <img
                  className="img-product-before"
                  src={ImgProductItem1}
                  alt=""
                />
                <img
                  className="img-product-after"
                  src={ImgProductItem2}
                  alt=""
                />
              </Link>
            </div>
            ) : onClickCollection === 1 ? (
              <div className="wrapper-img-product-new">
              <Link className="img-product-new" to="/">
                <img
                  className="img-product-before"
                  src={ImgProductItem3}
                  alt=""
                />
                <img
                  className="img-product-after"
                  src={ImgProductItem4}
                  alt=""
                />
              </Link>
            </div>
            ) : onClickCollection === 2 ? (
              <div className="wrapper-img-product-new">
              <Link className="img-product-new" to="/">
                <img
                  className="img-product-before"
                  src={ImgProductItem5}
                  alt=""
                />
                <img
                  className="img-product-after"
                  src={ImgProductItem6}
                  alt=""
                />
              </Link>
            </div>
            ) : (
              <div className="wrapper-img-product-new">
              <Link className="img-product-new" to="/">
                <img
                  className="img-product-before"
                  src={ImgProductItem7}
                  alt=""
                />
                <img
                  className="img-product-after"
                  src={ImgProductItem8}
                  alt=""
                />
              </Link>
            </div>
            )}

            {onClickCollection === 0 ? (
              <div className="wrapper-product-new">
                <div className="product-new">
                  <p className="title-product">PRODUCT SEXY GIRLS</p>
                  <p className="description-product">
                    The history of T-shirt is very interesting. The T-shirt has
                    been a part of clothing since ancient Egypt. A type of
                    modern T-shirt was developed in England in the end of 19th
                    century. The idea of a T-shirt came to the USA during the
                  </p>
                  <p className="title-product">SHOP THIS STYLE</p>
                  <div className="wrapper-list-product-item">
                    <SlideNewCollection1 />
                  </div>
                  <Link className="wrapper-link-product-item" to="/">
                    VIEW MORE LOOKS
                  </Link>
                </div>
              </div>
            ) : onClickCollection === 1 ? (
              <div className="wrapper-product-new">
                <div className="product-new">
                  <p className="title-product">PRODUCT DRESS SHORT</p>
                  <p className="description-product">
                    The history of T-shirt is very interesting. The T-shirt has
                    been a part of clothing since ancient Egypt. A type of
                    modern T-shirt was developed in England in the end of 19th
                    century. The idea of a T-shirt came to the USA during the
                  </p>
                  <p className="title-product">SHOP THIS STYLE</p>
                  <div className="wrapper-list-product-item">
                    <SlideNewCollection1 />
                  </div>
                  <Link className="wrapper-link-product-item" to="/">
                    VIEW MORE LOOKS
                  </Link>
                </div>
              </div>
            ) : onClickCollection === 2 ? (
              <div className="wrapper-product-new">
                <div className="product-new">
                  <p className="title-product">PRODUCT OFFICE FASHION</p>
                  <p className="description-product">
                    The history of T-shirt is very interesting. The T-shirt has
                    been a part of clothing since ancient Egypt. A type of
                    modern T-shirt was developed in England in the end of 19th
                    century. The idea of a T-shirt came to the USA during the
                  </p>
                  <p className="title-product">SHOP THIS STYLE</p>
                  <div className="wrapper-list-product-item">
                    <SlideNewCollection1 />
                  </div>
                  <Link className="wrapper-link-product-item" to="/">
                    VIEW MORE LOOKS
                  </Link>
                </div>
              </div>
            ) : (
              <div className="wrapper-product-new">
                <div className="product-new">
                  <p className="title-product">PRODUCT SUMMER COLLECTION</p>
                  <p className="description-product">
                    The history of T-shirt is very interesting. The T-shirt has
                    been a part of clothing since ancient Egypt. A type of
                    modern T-shirt was developed in England in the end of 19th
                    century. The idea of a T-shirt came to the USA during the
                  </p>
                  <p className="title-product">SHOP THIS STYLE</p>
                  <div className="wrapper-list-product-item">
                    <SlideNewCollection1 />
                  </div>
                  <Link className="wrapper-link-product-item" to="/">
                    VIEW MORE LOOKS
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
