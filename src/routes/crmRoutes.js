const routes = (app) => {

    app.route('/contact')
        .get((request, response, next) => {
            // middleware code
                console.log(`Request URL: ${request.url}`);
                console.log(`Request method: ${request.method}`);
                next();
            }, (request, response, next) =>
                response.json({
                    message: `GET request successful`
                })
        )

        .post((request, response) => 
                response.json({
                    message: `POST request successful`
                })
            );

    app.route('/contact/:contact_id')
        .put((request, response) =>
                response.json({
                    message: `PUT request successful`
                })
            )

        .delete((request, response) =>
                response.json({
                    message: `DELETE request successful`
                })
            );

}

export default routes;