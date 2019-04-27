import { Parse } from 'parse';

Parse.initialize('myAppId');
Parse.serverURL = 'https://autism-apis.herokuapp.com/parse';

export class HttpClient {

    static async postUser(object) {
        const UserChildren = Parse.Object.extend('userChildren');
        const userChildren = new UserChildren();

        userChildren.set("name", object.name);
        userChildren.set("age", parseInt(object.age));
        userChildren.set("syndrome", object.syndrome);
        userChildren.set('teaching', object.teaching);

        userChildren.save()
            .then((userChildren) => {
                console.log('New object created with objectId: ' + userChildren);
                alert('Cadastro efetuado com sucesso ' + userChildren.name + ', Agora bora de gameplay')
            }, (error) => {
                console.log('Failed to create new object, with error code: ' + error.message);
            });
    }
}
