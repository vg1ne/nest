import {Get, Controller, Req, Query} from '@nestjs/common';
import {IContact} from "../../folio-app/src/app/contacts/models/contact";
import {generateContacts} from "./contacts.mock";

const contacts = generateContacts(200);

@Controller('api/contacts')
export class ContactsController {
    @Get()
    root(@Query() query): IContact[] {
        // TODO: add paging logic and fix age sorting
        let returned = [];
        if(query.sortBy === 'id' || query.sortBy === 'age'){
            returned = contacts
                .sort((a, b) => b[query.sortBy] - a[query.sortBy])
                .slice(0, query.itemsPerPage);
        } else{
            returned = contacts
                .sort((a, b) => {
                    if (a[query.sortBy] > b[query.sortBy]) {
                        return 1;
                    }
                    if (a[query.sortBy] < b[query.sortBy]) {
                        return -1;
                    }
                    return 0;
                })
                .slice(0, query.itemsPerPage);
        }
        return (query.sortOrder === 'desc') ? returned : returned.reverse();
    }
}

