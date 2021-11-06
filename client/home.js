import React, { Component } from 'react'

export default class home extends Component {
    render() {
        return (
            <div>
                
                
                const homePage = { (hPage) => {
                        var request = new XMLHttpRequest();

                        // Initialize a request
                        request.open('get', 'https://api.github.com/users/funchal')
                        // Send it
                        request.send()
                        }

                           
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    // Custom Middleware

    app.use((req, res, next) => {
    req.context = {
        models,
        me: models.users[1],
    };
    next();
    });

    // * Routes * //

    app.use('/session', routes.session);
    app.use('/users', routes.user);
    app.use('/messages', routes.message);

    // * Start * //

    app.listen(process.env.PORT, () =>
    console.log(`Example app listening on port ${process.env.PORT}!`),
    );
                    

            </div>
        )
    }
}
