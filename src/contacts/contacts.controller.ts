import {Controller, Get, Query} from '@nestjs/common';
import {generateContacts} from "./contacts.mock";
import {IContactsResponse} from "./contacts-response.model";

const contacts = generateContacts(200);

@Controller('api/contacts')
export class ContactsController {
    @Get()
    root(@Query() query): IContactsResponse {
        let returned = [];
        if(query.sortBy === 'id' || query.sortBy === 'age'){
            returned = contacts
                .sort((a, b) => b[query.sortBy] - a[query.sortBy]);

        } else{
            returned = contacts
                .sort((a, b) => {
                    if (a[query.sortBy] < b[query.sortBy]) {
                        return 1;
                    }
                    if (a[query.sortBy] > b[query.sortBy]) {
                        return -1;
                    }
                    return 0;
                })
        }
        const queryCurrentPage = parseInt(query.currentPage, 10)
        const startInd = (queryCurrentPage > 0) ?
            (queryCurrentPage * query.itemsPerPage) :
            0;
        const lastInd = (queryCurrentPage > 0) ?
            (queryCurrentPage * query.itemsPerPage + parseInt(query.itemsPerPage, 10)) :
            query.itemsPerPage;

        const sorted = (query.sortOrder === 'desc') ? returned : returned.reverse();
        return {
            items: sorted.slice(startInd, lastInd),
            length: contacts.length
        }
    }
}

