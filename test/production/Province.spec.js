const Province = require('../../src/production/Province');
const should = require('should');

function sampleProvinceData(){
    return {
        name: "Asia",
        producers: [
            {name: "Byzantium", cost: 10, production: 9},
            {name: "Attalia",   cost: 12, production: 10},
            {name: "Sinope",    cost: 10, production: 6},
        ],
        demand: 30,
        price: 20
    }
}


describe('province', function(){
   let asia;

   beforeEach(function (){
      asia = new Province(sampleProvinceData());
   });

    it('shortfall', function(){
       (asia.shortfall).should.be.equal(5);
   })

    it('profit', function () {
        (asia.profit).should.be.equal(480);
    });
});