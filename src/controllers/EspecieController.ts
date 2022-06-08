import sql from '../config/db'
import { Especie, getEspecie } from '../models/Especie'

export const saveEspecie = async (especie: Especie) => {
    const response = await sql`
        insert into especie(id, nomeCientifico, nomePop, habitat, familia, ordem) values (
                ${especie.id}, ${especie.nomeCientifico}, ${especie.nomePop},
                ${especie.habitat}, ${especie.familia}, ${especie.ordem}
            ) returning id
    ` 
    const { id } = response[0]
    return Number(id)
}

export const getEspecieById =async (id: number) => {
    const response = await sql`
        select * from especies where id = ${id}
    `
    const especie = getEspecie(response[0])

    return especie
}

