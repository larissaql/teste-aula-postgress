export type Jaula = {
    cod: number
    area: number
    zelador: string
}

export const getJaula = (jsonObj: any): Jaula => {
    const { cod, area, zelador } = jsonObj
    const jaula: Jaula = {
        cod,
        area,
        zelador


    }
    return jaula
}
