import * as fs from "fs";
const names = JSON.parse(fs.readFileSync('./src/contacts/db/names.json', 'utf8'));

export const generateContacts = (amount:number) => {
    console.log(names)
    const contacts = [];

    for(let i = 0; i <= amount; i++){
        contacts.push(new GeneratedContact(i + 1))
    }
    return contacts;
}

export class GeneratedContact{
    private id: number;
    private firstName: string;
    private lastName: string;
    private age: number;
    constructor(id: number){
        // this.id = Math.round(Math.random() * (1000 - 1) + 1);
        this.id = id;
        this.firstName = names[Math.round(Math.random() * (names.length - 1) + 1)];
        this.lastName = names[Math.round(Math.random() * (names.length - 1) + 1)];
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