class Owing{
    constructor(aInvoice) {
        this._invoice = aInvoice;
        this._outstanding = 0;
    }

    printBanner() {
        console.log("******************");
        console.log("***** 고객 채무 *****");
        console.log("******************");
    }

    printDetails() {
        console.log(`고객명: ${this._invoice.customer}`);
        console.log(`채무액: ${this._outstanding}`);
        console.log(`마감일: ${this._invoice.dueDate.toLocaleDateString()}`);
    }

    print() {
        this.printBanner();

        for (const o of this._invoice.orders) {
            this._outstanding += o.amount;
        }

        this._invoice.dueDate = new Date(2020, 11, 15);

        this.printDetails();
    }

}

module.exports = Owing;