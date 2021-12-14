import React, { Component } from 'react'

export default class serverApi extends Component {
    render() {
        return (
            <div>
                var app = require('express')();
                    var bodyParser = require('body-parser');

                    app.use(bodyParser.json()); // for parsing application/json
                    app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

                    app.post('/data', function (req, res) {
                    console.log(req.body);
                    res.end();
                    });
                    describe('GET /api/v1/states', () => {
                        
                it('should respond with an array of states', async () => {
                    const response = await supertest(app)
                    .get('/api/v1/states')
                    .expect('Content-Type', /json/)
                    .expect(200);

                    expect(response.body.length).toBeGreaterThan(0);
                });
                                    

app.listen(3000);
            </div>
        )
    }
}
