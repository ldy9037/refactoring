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

    it('change production', function(){
       asia.producers[0].production = 20;
        (asia.shortfall).should.be.equal(-6);
        (asia.profit).should.be.equal(580);
    });

    it('zero demand', function(){
        asia.demand = 0;
        (asia.shortfall).should.be.equal(-25);
        (asia.profit).should.be.equal(-20);
    });

    it('nagative demand', function(){
        asia.demand = -1;
        (asia.shortfall).should.be.equal(-26);
        (asia.profit).should.be.equal(-40);
    });

    it('empty string demand', function(){
        asia.demand = "";
        (asia.shortfall).should.be.eql(NaN);
        (asia.profit).should.be.eql(NaN);
    });
});

describe('no producers', function(){
   let noProducers;
   beforeEach(function(){
       const data = {
         name: "No producers",
         producers: [],
         demand: 30,
         price: 20
       };

       noProducers = new Province(data);
   })

    it('shortfall', function(){
        (noProducers.shortfall).should.be.equal(30);
    });

    it('profit', function(){
       (noProducers.profit).should.be.equal(-20);
    });

    it('string for producers', function (){
       const data = {
         name : "String producers",
         producers : [],
         demand: 30,
         price: 20
       };
       const prov = new Province(data);
        (prov.shortfall).should.be.equal(30);
    });
});