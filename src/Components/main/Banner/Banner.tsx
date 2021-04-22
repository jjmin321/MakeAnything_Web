import React, { useLayoutEffect } from "react";
import { useEffect } from "react";
import { useState } from "react";
import cookies from "js-cookie";
import "./Banner.module.scss";
import BannerLogin from "./BannerLogin/BannerLogin";
import BannerSearch from "./BannerSearch/BannerSearch";
import { customAxios } from "../../../lib/customAxios";

const Banner = () => {
  const [item, setItem] = useState<number>();
  const [info, setInfo] = useState<Object>(null);
  useEffect(() => {
    setItem(50);
  }, []);
  useLayoutEffect(() => {
    customAxios.get("/user/getInfo").then((Response) => {
      if (Response.data.status == 200) {
        setInfo(Response.data.data);
      } else {
        // 리프레시 토큰으로 액세스 토큰 갱신 (근데 그거도 403이면 아무것도 안함)
      }
    });
  }, []);

  return (
    <>
      <div className="Banner">
        <div className="Banner-Top">
          <div className="Banner-Home">Make Anything</div>
          {info == null ? <BannerLogin /> : <BannerUser info={info} />}
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
