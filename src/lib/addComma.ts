import { IItem } from "../interface/IItem";

export const addComma = (num: number) => {
    var regexp = /\B(?=(\d{3})+(?!\d))/g;
    return num.toString().replace(regexp, ',');
}