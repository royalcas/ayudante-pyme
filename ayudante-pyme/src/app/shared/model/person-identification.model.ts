export class PersonIdentification {

    public static default(): PersonIdentification {
        return new PersonIdentification('CC', null);
    }
    constructor(
        public typeId: string,
        public idNumber: string
    ) {
    }
}
