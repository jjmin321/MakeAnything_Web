import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Banner.module.scss";
import BannerLogin from "./BannerLogin/BannerLogin";
import BannerSearch from "./BannerSearch/BannerSearch";

const Banner = () => {
  const [item, setItem] = useState<number>();
  useEffect(() => {
    setItem(50);
  }, []);

  return (
    <>
      <div className="Banner">
        <div className="Banner-Top">
          <div className="Banner-Home">Make Anything</div>
          <BannerLogin />
        </div>

        <div className="Banner-Middle">
          <div className="Banner-Middle-Text">
            총 {item}개의 상품이 등록되어 있습니다!
          </div>
          <div className="Banner-Middle-Title">
            나만의 재능을 상품으로, Make Anything
          </div>
          <BannerSearch />
        </div>
      </div>
    </>
  );
};

export default Banner;