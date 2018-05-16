import { Category } from './category.model';
import { Money } from './money.model';
import { Entity } from './entity.model';

export class Product extends Entity {
    category: Category;

    public static default(): Product {
        return new Product(null, null, null, null, null, null, Money.default(), null, null);
    }

    constructor(
        public id: string,
        public referenceCode: string,
        public name: string,
        public description: string,
        public personalizedFields: any,
        public unitOfMeasure: string,
        public valuePerUnit: Money,
        public categoryId: string,
        public brandId: string,
        public quantityInStock: number = 0
    ) {
        super(id);
    }
}
