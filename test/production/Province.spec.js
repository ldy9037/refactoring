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
   it('shortfall', function(){
       const asia = new Province(sampleProvinceData());
       (asia.shortfall).should.be.equal(5);
   })
});