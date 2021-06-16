let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../namn");

// Assertion Style
chai.should();

chai.use(chaiHttp);

describe("Test API for cocktail app", () => {
  // Test GET route
  describe("GET /cocktails/?id=...", () => {
    let insertedId = "";
    const rand = Math.random();

    before((done) => {
      chai
        .request(server.app)
        .post("/cocktails/new")
        .type("form")
        .send({ name: "testDrink" + rand, instruction: "Mix the ingredients" })
        .end((err, result) => {
          insertedId = result.body._id;
          done();
        });
    });
    it("It should GET a cocktail", (done) => {
      const url = "/cocktails/?id=" + insertedId;
      chai
        .request(server.app)
        .get(url)
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.be.a("object");
          chai
            .expect(response.body)
            .to.have.keys(["name", "instruction", "_id", "__v"]);
          chai.expect(response.body.name).to.be.equal("testDrink" + rand);
          done();
        });
    });
    after((done) => {
      chai
        .request(server.app)
        .delete("/cocktails/?id=" + insertedId)
        .end((err, result) => {
          done();
        });
    });
  });
  describe(" GET with error", () => {
    it("It should not be able to find this id", (done) => {
      chai
        .request(server.app)
        .get("/cocktails/?id=666777888")
        .end((err, response) => {
          response.should.have.status(404);
          done();
        });
    });
  });
});
