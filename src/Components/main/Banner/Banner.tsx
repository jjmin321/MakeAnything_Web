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
  useLayoutEffect(() => {
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
            나만의 재능을 상품으로, Make Anything
          </div>
          <BannerSearch />
        </div>
      </div>
    </>
  );
};

export default Banner;
