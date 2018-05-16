export class Money {
    public static default() {
        return new Money(0);
    }

    constructor(
        public value: number,
        public currency: string = 'COP'
    ) {
    }
}
