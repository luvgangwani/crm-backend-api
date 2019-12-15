
import { addNewContact, getAllContacts, getContact, updateContact, deleteContact } from '../controllers/crmController';

const routes = (app) => {

    app.route('/contact')
        .get((request, response, next) => {
            // middleware code
                console.log(`Request URL: ${request.url}`);
                console.log(`Request method: ${request.method}`);
                next();
            }, getAllContacts)

        .post(addNewContact);

    app.route('/contact/:contact_id')
        .get(getContact)

        .put(updateContact)

        .delete(deleteContact);

}

export default routes;