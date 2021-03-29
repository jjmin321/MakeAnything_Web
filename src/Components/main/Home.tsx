import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./Home.module.scss";

const Home = () => {
  const [item, setItem] = useState<number>();
  useEffect(() => {
    setItem(50);
  }, []);
  return (
    <>
      <div className="Banner">
        <div className="Banner-Home">Make Anything</div>
        <div className="Banner-Middle">
          <div className="Banner-Middle-Text">
            총 {item}개의 상품이 등록되어 있습니다!
          </div>
          <div className="Banner-Middle-Title">
            나만의 재능을 상품으로, Make Anything
          </div>
          <div className="Banner-Middle-Search">
            웹 사이트 개발
            <FaSearch className="Banner-Middle-Search-Icon" />
          </div>
        </div>
        <div className="Banner-Login">로그인</div>
      </div>
      
      <div className="Card-Description">재능 마켓이에요!</div>
      <div className="Card"></div>
      <div className="Card-Description">중고 마켓이에요!</div>
      <div className="Card"></div>
      <div className="Card-Description">구매 요청 마켓이에요!</div>
      <div className="Card"></div>
    </>
  );
};

export default Home;
