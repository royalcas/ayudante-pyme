import { Money } from './modey.model';

export class Product {
    public static default(): Product {
        return new Product(null, null, null, null, null, null, Money.default());
    }

    constructor(
        public id: string,
        public name: string,
        public description: string,
        public personalizedFields: any,
        public category: string,
        public unitOfMeasure: string,
        public valuePerUnit: Money,
        public quantityInStock: number = 0
    ) {}
}
