export type Especie = {
    id: number
    nomeCientifico: string
    nomePop: string
    habitat: string
    familia: string
    ordem: string
}

export const getEspecie = (jsonObj: any): Especie => {
    const { id, nomeCientifico, nomePop, habitat, familia, ordem } = jsonObj
    const especie: Especie = {
        id,
        nomeCientifico,
        nomePop,
        habitat,
        familia,
        ordem 
    }
    return especie
}

     