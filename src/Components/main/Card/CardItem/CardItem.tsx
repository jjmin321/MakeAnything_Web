import React from "react";
import { IItem } from "../../../../interface/IItem";
import { addComma } from "../../../../lib/addComma";
import { SERVER_ADDRESS } from "../../../../lib/customAxios";

const CardItem = ({ item }: { item: IItem }) => {
  return (
    <>
      <div className="Card-Item">
        <img
          className="Card-Item-Thumbnail"
          src={`${SERVER_ADDRESS}/${item.thumbnail}`}
          alt={item.name}
        />
        <div>
          <div className="Card-Item-UserName">{item.user.name}</div>
          <div className="Card-Item-Price">{`${addComma(item.price)}원`}</div>
        </div>
        <div className="Card-Item-Name">{item.name}</div>
      </div>
    </>
  );
};

export default CardItem;
