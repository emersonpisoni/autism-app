var Parse = require('parse');

export function Teste() {
    Parse.initialize('myAppId');
    Parse.serverURL = 'https://autism-apis.herokuapp.com/parse';

    const UserChildren = Parse.Object.extend('userChildren');
    const userChildren = new UserChildren();

    userChildren.set("name", 'teste');
    userChildren.set("age", 01);
    userChildren.set("syndrome", 'teste');
    userChildren.set('teaching', 1);

    userChildren.save()
        .then((userChildren) => {
            // Execute any logic that should take place after the object is saved.
            alert('New object created with objectId: ' + userChildren.id);
        }, (error) => {
            // Execute any logic that should take place if the save fails.
            // error is a Parse.Error with an error code and message.
            alert('Failed to create new object, with error code: ' + error.message);
        });
}