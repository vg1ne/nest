import {Get, Controller, Req, Query} from '@nestjs/common';
import {IContact} from "../../folio-app/src/app/contacts/models/contact";
import {generateContacts} from "./contacts.mock";

const contacts = generateContacts(200);

@Controller('api/contacts')
export class ContactsController {
    @Get()
    root(@Query() query): {items: IContact[], length: number} {
        // TODO: add paging logic and fix age sorting
        let returned = [];
        if(query.sortBy === 'id' || query.sortBy === 'age'){
            returned = contacts
                .sort((a, b) => b[query.sortBy] - a[query.sortBy]);

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
        }
        const startInd = query.currentPage * query.itemsPerPage
        const lastInd = (query.currentPage > 0) ?
            (query.currentPage * query.itemsPerPage + parseInt(query.itemsPerPage, 10)) :
            query.itemsPerPage;
        const sorted = (query.sortOrder === 'desc') ? returned : returned.reverse();
        return {
            items: sorted.slice(startInd + 1, lastInd + 1),
            length: contacts.length
        }
    }
}

