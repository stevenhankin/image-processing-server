// Import the dependencies for testing
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server.ts';
// Configure chai
chai.use(chaiHttp);
chai.should();

describe("GET", () => {
        it ("should return 404 if not using path filteredimage ", (done) => {
            chai.request(app)
            .get('/fff')
            .end((err,res) => {
                res.should.have.status(404);
                done();
            });
        });

        it ("should return 400 if query parameter is not specified ", (done) => {
            chai.request(app)
            .get('/filteredimage')
            .end((err,res) => {
                res.should.have.status(400);
                done();
            });
        });


        it ("should return 422 if query parameter is not a valid image url ", (done) => {
            chai.request(app)
            .get('/filteredimage?image_url=www.google.com')
            .end((err,res) => {
                res.should.have.status(422);
                done();
            });
        });

        it ("should return 200 AND file if valid query for an image", (done) => {
            chai.request(app)
            .get('/filteredimage?image_url=https://timedotcom.files.wordpress.com/2019/03/kitten-report.jpg')
            .end((err,res) => {
                res.should.have.status(200);
                res.body.should.be.instanceof(Buffer);
                done();
            });
        });

    });
