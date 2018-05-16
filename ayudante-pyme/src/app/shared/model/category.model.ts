import { Entity } from './entity.model';

export class Category extends Entity {
    public name: string;
    public description: string;
    public children: Category[];

    public static create(id: string, name: string, description: string): Category {
        const category = new Category(id);
        category.name = name;
        category.description = description;
        return category;
    }
}
