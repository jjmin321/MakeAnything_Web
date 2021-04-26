import React from "react";
import "./Card.module.scss";

const Card = () => {
  return (
    <>
      <div className="Card-Description">
        <div className="Card-Description-Start">재능 마켓이에요!</div>
        <div className="Card-Description-End" onClick={() => window.location.href = "/market/talent"}> {"<< 이동하기!"} </div>
      </div>
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
      <div className="Card-Description">
        <div className="Card-Description-Start">중고 마켓이에요!</div>
        <div className="Card-Description-End">{"<< 이동하기!"}</div>
      </div>
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
      <div className="Card-Description">
        <div className="Card-Description-Start">구매 요청 마켓이에요!</div>
        <div className="Card-Description-End">{"<< 이동하기!"}</div>
      </div>
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
