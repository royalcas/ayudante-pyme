export class ContactInformation {
    constructor (
        public phoneNumbers: PhoneNumber[]
    ) {}
}

export enum PhoneNumberType {
    Residence,
    Cellphone,
    Office
}

export class PhoneNumber {
    constructor(
        public country: string,
        public city: string,
        public phoneNumber: string,
        public extension: string
    ) {}
}
