export type Zelador = {
    mat: number
    nome: string
    dtNasc: string
}

export const getZelador = (jsonObj: any): Zelador => {
    const { mat, nome, dtNasc } = jsonObj
    const zelador: Zelador = {
        mat,
        nome,
        dtNasc

    }
    return zelador
}

    