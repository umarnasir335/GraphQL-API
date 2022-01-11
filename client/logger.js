import React, { Component } from 'react'

export default class logger extends Component {
    render() {
        it('should respond with a 404 for a not found state', async () => {
            await supertest(app)
              .get('/api/v1/states/4200')
              .expect('Content-Type', /json/)
              .expect(404);
          });
        return (
            <div>
                     console[type](
    ...args.map((item) => {
                if (typeof item === 'object') {
             return util.inspect(item, { depth: 5, colors: true });
                }
      return item;
    })
  );    
            </div>
        )
    }
}
