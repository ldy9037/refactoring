const Clock = {
    today: new Date('2020-12-28 08:19:00')
};


const invoice = {
    orders: [
        {amount: 3000},
        {amount: 4000},
        {amount: 5000},
        {amount: 6000}
    ],
    dueDate: new Date(),
    customer: '이동열'
}

function printOwing(aInvoice) {
    let outstanding = 0;

    console.log("******************");
    console.log("***** 고객 채무 *****");
    console.log("******************");

    for (const o of aInvoice.orders) {
        outstanding += o.amount;
    }

    const today = Clock.today;
    aInvoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate()+30);

    console.log(`고객명: ${aInvoice.customer}`);
    console.log(`채무액: ${outstanding}`);
    console.log(`마감일: ${aInvoice.dueDate.toLocaleDateString()}`);
}

