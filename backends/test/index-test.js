
import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../index';
let should = chai.should();

chai.use(chaiHttp);

describe('test', function() {
    it('should list all user on /test GET', function(done) {
        chai.request(server)
          .get('/api/test')
          .end(function(err, res){
            res.should.have.status(200);
            done();
        });
    });
});