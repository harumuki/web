import * as chai from "chai";
import chaiHttp = require("chai-http");

chai.use(chaiHttp);


describe("cdn duncandavidson.com", () => {
    it("can be accessed", function (done) {
        chai
            .request("https://duncandavidson.com")
            .get("/")
            .end(function (err, res) {
                chai.expect(err).to.be.null;
                chai.expect(res).to.have.status(200);
                done();
            });
    });

    // it("is on latest revision", async () => {
    //   try {
    //     const res = await chai
    //       .request("https://api.github.com")
    //       .get("/repos/duncan/website/commits");
    //     chai.expect(res).to.have.status(200);
    //     let version = JSON.parse(res.text)[0]["sha"];
    //     chai
    //       .request("https://duncan.dev")
    //       .get("/version")
    //       .end(function (err, res) {
    //         chai.expect(err).to.be.null;
    //         chai.expect(res).to.have.status(200);
    //         chai.expect(res.text.trim()).to.equal(version);
    //       });
    //   } catch (err_1) {
    //     throw new Error("GitHub is not responding or we're offline");
    //   }
    // });
});
