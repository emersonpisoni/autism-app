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
        userChildren.set('result', object.result);

        return userChildren.save().then((userChildren) => {
            console.log('New object created with objectId: ' + userChildren)
            return userChildren.id
        }, (error) => {
            console.log('Failed to create new object, with error code: ' + error.message);
        });
    }

    static async postResultResponse(object) {
        const UserChildren = Parse.Object.extend('userChildren');
        const userChildren = new UserChildren();

        userChildren.set("objectId", object.id);
        userChildren.set("result", object.result);
        userChildren.set("dificuldadeDoAluno", object.dificuldadeDoAluno);
        userChildren.set("medidaTomada", object.medidaTomada);
        
        return userChildren.save().then((userChildren) => {
            console.log(userChildren + "Update")
            return userChildren.id
        }, (error) => {
            console.log('Failed to create new object, with error code: ' + error.message);
        });
    }

}

