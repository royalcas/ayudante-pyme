import { ContactInformation } from './contact.model';
import { PersonIdentification } from './person-identification.model';
export class Person {
    constructor(
        public id: string,
        public name: string,
        public identification: PersonIdentification,
        public email: string,
        public photoUrl: string,
        public contact: ContactInformation
     ) {
    }
}
