class Owing{
    constructor(aInvoice) {
        this._invoice = aInvoice;
    }

    print() {
        let outstanding = 0;

        console.log("******************");
        console.log("***** 고객 채무 *****");
        console.log("******************");

        for (const o of this._invoice.orders) {
            outstanding += o.amount;
        }

        this._invoice.dueDate = new Date(2020, 11, 15);

        console.log(`고객명: ${this._invoice.customer}`);
        console.log(`채무액: ${outstanding}`);
        console.log(`마감일: ${this._invoice.dueDate.toLocaleDateString()}`);
    }

    printBanner(){

    }
}

module.exports = Owing;