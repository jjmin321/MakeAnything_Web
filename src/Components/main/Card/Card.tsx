import React from "react";
import "./Card.module.scss";

const Card = () => {
  return (
    <>
      <div className="Card-Description">재능 마켓이에요!</div>
      <div className="Card">
        <img
          className="Card-Item"
          src="assets/images/banner.png"
          alt="재능 상품"
        />
        <img
          className="Card-Item"
          src="assets/images/banner.png"
          alt="재능 상품"
        />
        <img
          className="Card-Item"
          src="assets/images/banner.png"
          alt="재능 상품"
        />
        <img
          className="Card-Item"
          src="assets/images/banner.png"
          alt="재능 상품"
        />
        <img
          className="Card-Item"
          src="assets/images/banner.png"
          alt="재능 상품"
        />
      </div>
      <div className="Card-Description">중고 마켓이에요!</div>
      <div className="Card">
        <img
          className="Card-Item"
          src="assets/images/banner.png"
          alt="중고 상품"
        />
        <img
          className="Card-Item"
          src="assets/images/banner.png"
          alt="중고 상품"
        />
        <img
          className="Card-Item"
          src="assets/images/banner.png"
          alt="중고 상품"
        />
        <img
          className="Card-Item"
          src="assets/images/banner.png"
          alt="중고 상품"
        />
        <img
          className="Card-Item"
          src="assets/images/banner.png"
          alt="중고 상품"
        />
      </div>
      <div className="Card-Description">구매 요청 마켓이에요!</div>
      <div className="Card">
        <img
          className="Card-Item"
          src="assets/images/banner.png"
          alt="구매 요청 상품"
        />
        <img
          className="Card-Item"
          src="assets/images/banner.png"
          alt="구매 요청 상품"
        />
        <img
          className="Card-Item"
          src="assets/images/banner.png"
          alt="구매 요청 상품"
        />
        <img
          className="Card-Item"
          src="assets/images/banner.png"
          alt="구매 요청 상품"
        />
        <img
          className="Card-Item"
          src="assets/images/banner.png"
          alt="구매 요청 상품"
        />
      </div>
    </>
  );
};

export default Card;