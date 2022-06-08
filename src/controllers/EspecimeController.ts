import sql from '../config/db'

import { Jaula } from '../models/Jaula'
import { Especie } from '../models/Especie'
import { Zelador } from '../models/Zelador'
import { Especime, getEspecime } from '../models/Especime'


export const saveEspecime = async (especime: Especime) => {
    const response = await sql`
        insert into especie(id, numSerie, apelido, especie) values (
                ${especime.id}, ${especime.numSerie}, ${especime.apelido}, ${especime.especie}
            ) returning id
    `
     const { id } = response[0];
     return Number(id)
}

export const getEspecimeByEspecie = async (especie: Especie) => {
    const response = await sql`
        select * from especimes
        inner join especie on especime.especie_id = especie.id
        where especies.id = ${especie.id}
    `
}

export const getEspecimeByJaula =async (jaula: Jaula) => {
    const response = await sql`
        select * from  especime
        inner join jaula on especime.jaula_cod = jaula.cod
        where jaula.cod = ${jaula.cod}
    `
    
}

export const getEspecimeByZelador = async (zelador: Zelador) => {
    const response = await sql`
        inner join jaula on especime.jaula_cod = jaula.cod
        inner join zelador_jaula on jaula.cod = zelador_jaula.jaula_cod
        where zelador_jaula.zelador_mat = ${zelador.mat}
    `
    
}