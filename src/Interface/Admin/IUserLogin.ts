import { number } from "prop-types"

export interface IUserLoginBody{
    EmailIdOrPhone: string,
    LoginPassword:string
};

export interface IUserLoginResult{
    UserRoleId:number,
    EmailId: string,
    PhoneNo: string,
    LoginPassword: string,
    BirthDate: string,
    EmailIdOrPhone: string

}