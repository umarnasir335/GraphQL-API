import React, { Component } from 'react'

export default class logger extends Component {
    render() {

        const onSubmit = async (data) => {
            try {
              setLoading(true);
              data.latitude = location.latitude;
              data.longitude = location.longitude;
              await createLogEntry(data);
              onClose();
            } catch (error) {
              console.error(error);
              setError(error.message);
              setLoading(false);
            }
          };

        function init(server) {
            const teamTimeoutMS = 30000;
            const io = socketIO(server);
          
            const serverState = {
              currentWord: getRandomWord(),
            };
          
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
