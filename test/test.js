//setting the environment variable.
process.env.NODE_ENV = "test"

//require development dependencies.
const server = require('../index') //requiring the server we going to test
const { expect } = require('chai');
const request = require('request')


it('getting hello world', (done) => {
    request('http://localhost:3000/',function (err, res,body) {
     expect(body).to.equal('Hello World!')    
     done()
    })
 })



