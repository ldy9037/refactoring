const Owing = require('../../src/refactoring/Owing');
const should = require('should');

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

function price(order){
    const basePrice = order.quantity * order.itemPrice;
    const quantityDiscount = Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
    return basePrice - quantityDiscount + Math.min(basePrice * 0.1, 100);
}

describe('Owing', function (){

    let owing;

    beforeEach(function (){
       owing =  new Owing(invoice);
    });

   it('print', function (){
        owing.print()
   });
});

describe('Variable extraction', function(){
   let order;

   beforeEach(function(){
       order = {
         quantity : 5,
         itemPrice: 3000
       };
   });

   it('price', function(){
       (price(order)).should.be.equal(15100);
   });
});