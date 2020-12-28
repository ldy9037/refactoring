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

describe('Owing', function (){

    let owing;

    beforeEach(function (){
       owing =  new Owing(invoice);
    });

   it('print', function (){
        owing.print()
   });
});