import { Parse } from 'parse';

Parse.initialize('myAppId');
Parse.serverURL = 'https://autism-apis.herokuapp.com/parse';

export class HttpClient {

    static postUser(object) {
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

    static putUserChildren(object) {
        const UserChildren = Parse.Object.extend('userChildren');
        const userChildren = new UserChildren();

        userChildren.set("objectId", object.id);
        if (object.result) {
            userChildren.set("result", object.result.result);
            userChildren.set("bastaoErros", object.bastaoErros);
        }
        if (object.dificuldadeDoAluno && object.medidaTomada) {
            userChildren.set("dificuldadeDoAluno", object.dificuldadeDoAluno);
            userChildren.set("medidaTomada", object.medidaTomada);
        }

        return userChildren.save().then((userChildren) => {
            console.log(userChildren + "Update")
            return userChildren.id
        }, (error) => {
            console.log('Failed to create new object, with error code: ' + error.message);
        });

    }

    static async getResult(object) {
        const UserChildren = Parse.Object.extend('userChildren');
        const query = new Parse.Query(UserChildren);

        const countErrosBastao = object.result.bastao.erros.length; // quantidade erros precisa ser >= que base
        const countErrosCursiva = object.result.cursiva.erros.length //quantidade de erros precisa ser >= que a base
        const countAcertosBastao = object.result.bastao.acertos.length; // quantidade de acertos precisa ser <= que a base
        const countAcertosCursiva = object.result.cursiva.acertos.length; // quantidade de acertos precisa ser <= que a base
        const mediaAtual = (countAcertosBastao + countAcertosCursiva) - (countErrosCursiva + countErrosBastao);

        const search = query.lessThanOrEqualTo('bastaoErros', countErrosBastao);
        const result = await search.find();
        console.log(result)
        if (result.length === 0) {
            console.log("deu falso")
            return false;
        } else {
            let medidaTomada = result[0].get('medidaTomada');
            let dificuldadeDoAluno = result[0].get('dificuldadeDoAluno');
            // console.log("CASO COPIA FIRST" + casoCopia)
            for (let i = 0; i < result.length; i++) {
                const first = result[i].get('result');
                console.log("first", first)
                const bastaoError = first.bastao.erros.length;
                const bastaoAcertos = first.bastao.acertos.length;
                const cursivaError = first.cursiva.erros.length;
                const cursivaAcerto = first.cursiva.acertos.length;
                const mediacaso = (cursivaAcerto + bastaoAcertos) - (cursivaError + bastaoError);
                if (mediaAtual === mediacaso) {
                    medidaTomada = result[i].get('medidaTomada');
                    dificuldadeDoAluno = result[i].get('dificuldadeDoAluno');

                }
            }

            console.log("Medida tomada: " + medidaTomada);
            console.log('dificuldade: ' + dificuldadeDoAluno)
            const retorno = {
                medidaTomada: medidaTomada || '',
                dificuldadeDoAluno: dificuldadeDoAluno || ''
            }

            return null;
            // return retorno;
        }
    }

}

