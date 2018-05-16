import { Money } from './money.model';

export interface IFinantialMovement {
    id: string;
    date: Date;
    value: Money;
}
