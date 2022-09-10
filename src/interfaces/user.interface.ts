
export interface UserModel {
    fname: string;
    lname: string;
    email: string;
    password: string,
    phone: number
}

export interface User extends UserModel {
    userId: string;
}
