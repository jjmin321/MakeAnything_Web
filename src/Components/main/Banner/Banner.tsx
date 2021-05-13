import React, { useLayoutEffect } from "react";
import { useEffect } from "react";
import { useState } from "react";
import cookies from "js-cookie";
import "./Banner.module.scss";
import BannerLogin from "./BannerLogin/BannerLogin";
import BannerSearch from "./BannerSearch/BannerSearch";
import { customAxios } from "../../../lib/customAxios";
import BannerUser from "./BannerUser/BannerUser";
import { initialUserState, IUser } from "../../../interface/IUser";

const Banner = () => {
  const [info, setInfo] = useState<IUser>(initialUserState);
  useEffect(() => {
    const func = async () => {
      await customAxios.get("/user/getInfo").then(({ data }) => {
        setInfo(data.data);
      });
    };

    func();
  }, []);

  return (
    <>
      <div className="Banner">
        <div className="Banner-Top">
          <div className="Banner-Home" onClick={() => window.location.reload()}>Make Anything</div>
          {info == null ? <BannerLogin /> : <BannerUser info={info} />}
        </div>
        <div className="Banner-Middle">
          <div className="Banner-Middle-Title">
            <span className="subText">나만의 재능을 상품으로</span>
            <span className="light">Make Anything</span>
            <span className="subText">지금 바로 사작해보세요!</span>
          </div>
          <BannerSearch />
        </div>
      </div>
    </>
  );
};

export default Banner;
