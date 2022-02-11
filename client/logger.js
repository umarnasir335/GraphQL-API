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
          export function sendMessage(message) {
            return fetch(API_URL, {
              method: 'POST',
              headers: {
                'content-type': 'application/json',
              },
              body: JSON.stringify(message)
            }).then(res => res.json());
          }
          app.on('web-contents-created', (e, contents) => {
            contents.on('will-navigate', (event, url) => {
              event.preventDefault();
              console.log('blocked navigate:', url);
            });
            contents.on('new-window', async (event, url) => {
              event.preventDefault();
              console.log('blocked window:', url);
            });
          });

          formIsValid = () => {
            let { name, message } = this.state.userMessage;
            name = name.trim();
            message = message.trim();
        
            const validMessage =
              name.length > 0 && name.length <= 500 &&
              message.length > 0 && message.length <= 500;
        
            return validMessage && this.state.haveUsersLocation ? true : false;
          }
        
          formSubmitted = (event) => {
            event.preventDefault();
            
            if (this.formIsValid()) {
              this.setState({
                sendingMessage: true
              });

        function init(server) {
            const teamTimeoutMS = 30000;
            const io = socketIO(server);

              .then(res => res.json())
            
          
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
