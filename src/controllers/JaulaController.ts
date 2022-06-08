import sql from '../config/db'

import { Zelador } from '../models/Zelador'
import { Jaula, getJaula } from '../models/Jaula'

export const saveJaula = async (jaula: Jaula) => {
    const response = await sql`
        insert into especie(cod, area, zelador) values (
                ${jaula.cod}, ${jaula.area}, ${jaula.zelador}
            ) returning cod;
    `
     const { cod } = response[0]
     return Number(cod)
}

export const getJaulaByZelador =async (zelador: Zelador) => {
    const response = await sql`
        select * from jaula
        inner join zelador_jaula on jaula.cod = zelador_jaula.jaula.cod
        where zelador_jaula.zelador_mat = ${zelador.mat}
    `
}

export const getJaulaById =async (cod: number) => {
    const response = await sql`
    select * from jaula where cod = ${cod}
    `
    const jaula = getJaula(response[0])
    return jaula
}