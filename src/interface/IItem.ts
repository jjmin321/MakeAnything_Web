import { IUser } from "./IUser";

export interface IItem {
    idx: number;
    type: string;
    user: IUser;
    name: string;
    description: string;
    price: number;
    thumbnail: string;
    createdAt: Date;
}

export const initialItemState: IItem = {
    idx: 0,
    type: "",
    user: null,
    name: "",
    description: "",
    price: 0,
    thumbnail: "",
    createdAt: null
}