import { React, useState, useEffect, ChangeEvent } from "react";
import { Dropdown } from "semantic-ui-react";
import { IItem, initialItemState } from "../../../interface/IItem";
import { customAxios } from "../../../lib/customAxios";
import "./Card.module.scss";
import CardItem from "./CardItem/CardItem";

const Card = () => {
  const [Item, setItem] = useState<Array<IItem>>([]);

  const onChange = (data) => {
    console.log(`/item/${data.value}`);
    customAxios.get(`/item/${data.value}`).then(({ data }) => {
      setItem(data.data);
      console.log("asdf");
    });
  };

  useEffect(() => {
    const func = async () => {
      await customAxios.get("/item/getAllItemsByPrice").then(({ data }) => {
        setItem(data.data);
      });
    };
    func();
  }, []);

  return (
    <>
      <div className="Sort">
        <button className="Sort-Dropdown">
          <Dropdown
            onChange={(e, data) => onChange(data)}
            text="물품 정렬 순▼"
            options={[
              { key: 1, text: "신규 등록 순", value: "getAllItemsDesc" },
              { key: 2, text: "예전 등록 순", value: "getAllItems" },
              { key: 3, text: "가격 높은 순", value: "getAllItemsByPriceDesc" },
              { key: 4, text: "가격 낮은 순", value: "getAllItemsByPrice" },
              { key: 5, text: "재능 물품만", value: "getTalentItems" },
              { key: 6, text: "중고 물품만", value: "getUsedItems" },
              { key: 7, text: "판매 요청 물품만", value: "getCustomItems" },
            ]}
          />
        </button>
      </div>
      <div className="Card">
        {Item.length > 0 &&
          Item.map((item: IItem, index: number) => (
            <CardItem key={index} item={item} />
          ))}
      </div>
    </>
  );
};

export default Card;
