import React, { Component } from 'react'

export default class test extends Component {
    render() {
        return (
            <div>
                const supertest = require('supertest');

                    const app = require('./app');
                    const project = require('./constants/project');

                    describe('GET /', () => {
                    it('should respond with a message', async () => {
                        const response = await supertest(app)
                        .get('/')
                        .expect('Content-Type', /json/)
                        .expect(200);

                        expect(response.body.message).toEqual(project.message);
                    });
            });
            </div>
        )
    }
}
