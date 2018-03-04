import {Get, Controller, Req} from '@nestjs/common';
import {IContact} from "../../folio-app/src/app/contacts/models/contact";
import {generateContacts} from "./contacts.mock";

const contacts = generateContacts(200);

@Controller('api/contacts')
export class ContactsController {
    @Get()
    root(@Req() request): IContact[] {
        return contacts;
    }
}

