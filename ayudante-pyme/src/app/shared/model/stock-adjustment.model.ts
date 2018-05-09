export class StockAdjustment {
    constructor(
        public id: string,
        public productId: string,
        public personalizedFields: string,
        public storage: string,
        public quantity: number
    ) { }
}
