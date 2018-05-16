import { Entity } from './entity.model';
import { PersonReference } from './person-reference.model';
import { Person } from './person.model';
import { Money } from './money.model';
import { Product } from './product.model';
import { firestore } from 'firebase/app';

export class Invoice extends Entity {
    public static default() {
        return new Invoice(new Date(), null, null, null,  null, null, [], [], 19, 0, null);
    }

    public static fromJSON(data: any): Invoice {
        if (!data) {
            return null;
        }

        return new Invoice(
            new Date(data.date),
            data.id,
            data.customerId,
            data.customer as Person,
            data.sellerEmail,
            data.number,
            Invoice.getItemsFromJSON(data.items),
            [],
            data.taxes,
            data.discountPercentage,
            data.categoryId
        );
    }

    public static getItemsFromJSON(items: any[]): InvoiceItem[] {
        if (!items || !items.length) {
            return [];
        }

        return items.map((item: any) => InvoiceItem.fromJSON(item));
    }

    constructor(
        public date: Date,
        public id: string,
        public customerId: string,
        public customer: Person,
        public sellerEmail: string,
        public number: number,
        public items: InvoiceItem[],
        public payments: InvoicePayment[],
        public taxes: number,
        public discountPercentage: number,
        public categoryId: string
    ) {
        super(id);
    }

    get discountPercentageBase1(): number {
        return this.discountPercentage / 100;
    }

    get total(): Money {
        let total = 0;

        if (this.items && this.items.length) {
            total = this.items.reduce((acum: number, currentItem: InvoiceItem) => {
                return acum + currentItem.total.value;
            }, 0);

            total = total * (1 - this.discountPercentageBase1);
        }

        return new Money(total);
    }

    mapToJson(): any {
        const raw = super.mapToJson();
        raw.date = firestore.FieldValue.serverTimestamp();
        return raw;
    }
}

export class InvoiceItem {
    public static default() {
        return new InvoiceItem(null, null, null, Money.default(), 0, 0);
    }

    public static fromJSON(rawData: any): InvoiceItem {
        if (!rawData) {
            return null;
        }

        return new InvoiceItem(
            rawData.itemId,
            rawData.name,
            rawData.additionalCharacteristics,
            rawData.valuePerUnit as Money,
            rawData.discountPercentage,
            rawData.quantity
        );
    }

    public static fromProduct(product: Product) {
        return new InvoiceItem( product.id, product.name, null, product.valuePerUnit, 0, 1);
    }

    constructor(
        public itemId: string,
        public name: string,
        public additionalCharacteristics: any = {},
        public valuePerUnit: Money = Money.default(),
        public discountPercentage: number = 0,
        public quantity: number = 0
    ) {}

    get valuePerUnitDiscount(): Money {
        return new Money(this.valuePerUnit.value * (1 - this.discountPercentageBase1));
    }

    get total(): Money {
        return new Money(this.valuePerUnitDiscount.value * this.quantity);
    }

    get discountPercentageBase1(): number {
        return this.discountPercentage / 100;
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
