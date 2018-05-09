import { ContactInformation } from './contact.model';
import { PersonIdentification } from './person-identification.model';
import { PersonReference } from './person-reference.model';
export class Person extends PersonReference {
    public static default() {
        return new Person(
            null,
            null,
            PersonIdentification.default(),
            null,
            null,
            ContactInformation.default());
    }

    constructor(
        public id: string,
        public name: string,
        public identification: PersonIdentification,
        public email: string,
        public photoUrl: string,
        public contact: ContactInformation,
        public type: PersonType = PersonType.Client
     ) {
         super(id);
    }
}

export enum PersonType {
    Undefined,
    Client,
    Provider,
    Member
}
