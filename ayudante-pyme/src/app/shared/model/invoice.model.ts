import { PersonReference } from './person-reference.model';
import { Person } from './person.model';
import { Money } from './modey.model';

export class Invoice {
    public static default() {
        return new Invoice(new Date(), null, null,  null, null, [], [], 19, 0, null);
    }

    constructor(
        public date: Date,
        public id: string,
        public customer: PersonReference,
        public sellerEmail: string,
        public number: number,
        public items: InvoiceItem[],
        public payments: InvoicePayment[],
        public taxes: number,
        public discountPercentage: number,
        public categoryId: string
    ) {
    }

    get total(): Money {
        let total = 0;

        if (this.items && this.items.length) {
            total = this.items.reduce((acum: number, currentItem: InvoiceItem) => {
                return acum + currentItem.total.value;
            }, 0);
        }

        return new Money(total);
    }
}

export class InvoiceItem {
    constructor(
        public itemId: string,
        public name: string,
        public additionalCharacteristics: any = {},
        public valuePerUnit: Money = Money.default(),
        public discountPercentage: number = 0,
        public quantity: number = 0
    ) {}

    get total(): Money {
        return new Money(this.valuePerUnit.value * this.discountPercentage * this.quantity);
    }
}


export class InvoicePayment {
    constructor(
        public paymentMethod: string,
        public value: Money,
        public customerId: string,
        public date: Date
    ) {}
}
