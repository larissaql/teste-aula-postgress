export type Especime = {
    id: number
    numSerie: string
    apelido?: string
    especie: string
}

export const getEspecime = (jsonObj: any): Especime => {
    const { id, numSerie, apelido, especie } = jsonObj
    const especime: Especime = {
        id,
        numSerie,
        apelido,
        especie
    }
    return especime
}

    