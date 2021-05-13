import React from "react";
import moment from "moment";
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
          <div className="Card-Item-Header">
            <div className="Card-Item-Header-UserName">{item.user.name}</div>
            <div className="Card-Item-Header-CreatedAt">
              {moment(item.createdAt).format("YYYY-MM-DD")}
            </div>
          </div>
          <div className="Card-Item-Price">{`${addComma(item.price)}원`}</div>
        </div>
        <div className="Card-Item-Body">{item.name}</div>
      </div>
    </>
  );
};

export default CardItem;
