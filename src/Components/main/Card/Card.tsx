import { React, useState, useLayoutEffect } from "react";
import { IItem, initialItemState } from "../../../interface/IItem";
import { customAxios } from "../../../lib/customAxios";
import "./Card.module.scss";
import CardItem from "./CardItem/CardItem";

const Card = () => {
  const [Item, setItem] = useState<Array<IItem>>([]);

  useLayoutEffect(() => {
    const func = async () => {
      await customAxios.get("/item/getAllItemsDesc").then(({ data }) => {
        setItem(data.data);
      });
    };
    func();
  }, []);

  return (
    <>
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
