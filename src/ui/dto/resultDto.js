export class ResultDto {
    constructor(data) {

        this.id = data.userChildrenId
        this.result = {
            cursiva: {
                acertos: data.acertosCursiva,
                erros: data.errosCursiva
            },
            bastao: {
                acertos: data.acertosBastao,
                erros: data.errosBastao
            }
        }
    }


}
