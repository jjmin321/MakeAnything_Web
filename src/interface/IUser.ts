export interface IUser {
    email: string;
    grade: number;
    id: string;
    name: string;
    phone: string;
    profileImage: string;
    room: number;
}

export const initialUserState: IUser = {
    email: "",
    grade: 0,
    id: "",
    name: "",
    phone: "",
    profileImage: "",
    room: 0
}