import {IContact} from "../../folio-app/src/app/contacts/models/contact";

export interface IContactsResponse {
    items: IContact[],
    length: number
}