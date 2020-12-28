class Owing{
    constructor() {
    }

    print(aInvoice) {
        let outstanding = 0;

        console.log("******************");
        console.log("***** 고객 채무 *****");
        console.log("******************");

        for (const o of aInvoice.orders) {
            outstanding += o.amount;
        }

        aInvoice.dueDate = new Date(2020, 11, 15);

        console.log(`고객명: ${aInvoice.customer}`);
        console.log(`채무액: ${outstanding}`);
        console.log(`마감일: ${aInvoice.dueDate.toLocaleDateString()}`);
    }
}