import {Contact, IContact} from "../../folio-app/src/app/contacts/models/contact";

export const contacts:IContact[] = [
    {
        id: 1,
        firstName: 'Ivan',
        lastName: 'Petrov',
        age: 25
    },
    {
        id: 2,
        firstName: 'Ilon',
        lastName: 'Mask',
        age: 45
    },
    {
        id: 3,
        firstName: 'Pamela',
        lastName: 'Anderson',
        age: 50
    }
];

export const generateContacts = (amount:number) => {
    const contacts = [];
    for(let i = 0; i <= amount; i++){
        contacts.push(new GeneratedContact())
    }
    return contacts;
}

export class GeneratedContact{
    private id: number;
    private firstName: string;
    private lastName: string;
    private age: number;
    constructor(){
        this.id = Math.round(Math.random() * (1000 - 1) + 1);
        this.firstName = Math.random().toString(36).substring(Math.random() * (10 - 3) + 3);
        this.lastName = Math.random().toString(36).substring(Math.random() * (10 - 3) + 3);
        this.age = Math.round(Math.random() * (65 - 18) + 18);
    }
}

// function generateContact(){
//     return new Contact(
//         {
//             id: Math.random() * (1000 - 1) + 1,
//             firstName: Math.random().toString(36).substring(Math.random() * (10 - 3) + 3),
//             lastName: Math.random().toString(36).substring(Math.random() * (10 - 3) + 3),
//             age: Math.random() * (65 - 18) + 18
//         }
//     )
// }