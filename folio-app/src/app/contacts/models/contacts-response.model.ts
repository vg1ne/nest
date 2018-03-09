import {IContact} from "./contact";

export interface IContactsResponse {
    items: IContact[],
    length: number
}
