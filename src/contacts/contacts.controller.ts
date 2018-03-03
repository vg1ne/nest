import { Get, Controller } from '@nestjs/common';
import {IContact} from "../../folio-app/src/app/contacts/models/contact";
import {contacts} from "./contacts.mock";

@Controller('api/contacts')
export class ContactsController {
	@Get()
	root(): IContact[] {
    return contacts;
  }
}
