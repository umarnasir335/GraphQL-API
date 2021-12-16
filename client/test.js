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
            
                        describe('GET /api/v1/companies', () => {
                        it('should respond with an array of companies', async () => {
                            const response = await supertest(app)
                            .get('/api/v1/companies')
                            .expect('Content-Type', /json/)
                            .expect(200);

                            expect(response.body).toBeInstanceOf(Array);
                        });
                        it('should respond with a 404 for a not found state', async () => {
                            await supertest(app)
                              .get('/api/v1/states/4200')
                              .expect('Content-Type', /json/)
                              .expect(404);
                          });
    });
            </div>
        
}

