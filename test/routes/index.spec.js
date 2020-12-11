const should = require('should');
const request = require('supertest');
const app = require('../../app');

describe('GET /', () => {
    it('should return 200 status code', (done) => {
        request(app)
            .get('/')
            .expect(200)
            .end((err, res) => {
                if(err) {
                    done(err);
                    return;
                }

                (res.text).should.be.equal('Hello World');

                done();
            });
    });
});