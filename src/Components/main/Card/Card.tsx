import { React, useState, useLayoutEffect } from "react";
import { IItem, initialItemState } from "../../../interface/IItem";
import { customAxios } from "../../../lib/customAxios";
import "./Card.module.scss";
import CardItem from "./CardItem/CardItem";

const Card = () => {
  const [talentItem, setTalentItem] = useState<Array<IItem>>([]);
  const [usedItem, setUsedItem] = useState<Array<IItem>>([]);
  const [customItem, setCustomItem] = useState<Array<IItem>>([]);

  useLayoutEffect(() => {
    const func = async () => {
      await customAxios.get("/item/getRecentItems").then(({ data }) => {
        setTalentItem(data.data.TALENT);
        setUsedItem(data.data.USED);
        setCustomItem(data.data.CUSTOM);
      });
    };
    func();
  }, []);

  return (
    <>
      <div className="Card-Description">
        <div className="Card-Description-Start">재능 마켓이에요!</div>
        <div
          className="Card-Description-End"
          onClick={() => (window.location.href = "/market/talent")}
        >
          {"<< 이동하기!"}
        </div>
      </div>
      <div className="Card">
        {talentItem.length > 0 &&
          talentItem.map((item: IItem, index: number) => (
            <CardItem key={index} item={item} />
          ))}
      </div>
      <div className="Card-Description">
        <div className="Card-Description-Start">중고 마켓이에요!</div>
        <div
          className="Card-Description-End"
          onClick={() => (window.location.href = "/market/used")}
        >
          {"<< 이동하기!"}
        </div>
      </div>
      <div className="Card">
        {usedItem.length > 0 &&
          usedItem.map((item: IItem, index: number) => (
            <CardItem key={index} item={item} />
          ))}
      </div>
      <div className="Card-Description">
        <div className="Card-Description-Start">구매 요청 마켓이에요!</div>
        <div
          className="Card-Description-End"
          onClick={() => (window.location.href = "/market/custom")}
        >
          {"<< 이동하기!"}
        </div>
      </div>
      <div className="Card">
        {customItem.length > 0 &&
          customItem.map((item: IItem, index: number) => (
            <CardItem key={index} item={item} />
          ))}
      </div>
    </>
  );
};

export default Card;
