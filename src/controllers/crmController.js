import firebase from '../../firebase';
import { registerVersion } from 'firebase';

export const addNewContact = (request, response) => {

    const ref = firebase
                .database()
                .ref(`/contact`);

    request.body.created_at = Date.now();

    ref.push(request.body)
        .then(response.json({status: 200}))
        .catch((err) => response.send(err));

}

export const getAllContacts = (request, response) => {

    const ref = firebase
                .database()
                .ref(`/contact`);
    
    ref.on('value', snapshot => {
        response.json(snapshot.val());
    })

}

export const getContact = (request, response) => {

    const ref = firebase
                .database()
                .ref(`/contact/${request.params.contact_id}`);
    
    ref.on('value', snapshot => {
        response.json(snapshot.val());
    });
}

export const updateContact = (request, response) => {

    const ref = firebase
                .database()
                .ref(`/contact/${request.params.contact_id}`);

    ref.set(
        request.body,
        (err) => {
                if(!err) response.json({message: "Contact updated successfully"})
                else response.send(err)
            }
        );

}

export const deleteContact = (request, response) => {

    const ref = firebase
                .database()
                .ref(`contact/${request.params.contact_id}`);

    ref.remove()
        .then(() => {
            response.json({message: "Contact deleted successfully"});
        })
        .catch(err => {
            response.send(err)
        });

}