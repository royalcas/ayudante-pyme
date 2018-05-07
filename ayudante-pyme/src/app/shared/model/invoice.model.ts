import { Person } from './person.model';
import { Money } from './modey.model';

export class Invoice {
    constructor(
        public date: Date,
        public id: string,
        public customer: Person,
        public number: number,
        public items: InvoiceItem[],
        public payments: InvoicePayment[],
        public total: Money,
        public categoryId: string
    ) {
    }
}

export class InvoiceItem {
    constructor(
        public itemId: string,
        public value: Money,
        public discount: Money,
        public quantity: number
    ) {}
}


export class InvoicePayment {
    constructor(
        public paymentMethod: string,
        public value: Money,
        public discount: Money,
        public quantity: number,
        public date: Date
    ) {}
}
