import * as chai from "chai";
import chaiHttp = require("chai-http");

chai.use(chaiHttp);


describe("awsa deployment", () => {
  it("can be accesed", function (done) {
    chai
      .request("https://black-plant-0729b0903.azurestaticapps.net")
      .get("/")
      .end(function (err, res) {
        chai.expect(err).to.be.null;
        chai.expect(res).to.have.status(200);
        done();
      })
  });
});