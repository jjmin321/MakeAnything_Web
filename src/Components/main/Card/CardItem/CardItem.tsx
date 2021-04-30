import React from 'react';
import { IItem } from '../../../../interface/IItem';
import { SERVER_ADDRESS } from '../../../../lib/customAxios';

const CardItem = ({item}: {item: IItem}) => {
    return (
        <>
        <img
          className="Card-Item"
          src={`${SERVER_ADDRESS}/${item.thumbnail}`}
          alt={item.name}
        />
        </>
    )
}

export default CardItem;