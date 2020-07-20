require('should')

describe("resource group duncandavidson.com", () => {
  var group = {}

  before(function (done) {
    const { exec } = require('child_process')
    exec('az group show -n duncandavidson.com', (err, stdout, stderr) => {
      if (!err) {
        group = JSON.parse(stdout)
        done()
      } else {
        done()
      }
    })
  })

  it("exists", function (done) {
    group['id'].should.exist
    done()
  })

  it("located in westeurope", function (done) {
    group['location'].should.equal("westeurope")
    done()
  })

  it("successifully provisioned", function (done) {
    group['properties']['provisioningState'].should.equal("Succeeded")
    done()
  })
})