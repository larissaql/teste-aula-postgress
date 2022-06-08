import sql from '../config/db'

import { Especie } from '../models/Especie'
import { Zelador, getZelador } from '../models/Zelador'

export const saveZelador = async (zelador: Zelador) => {
    const response = await sql`
        insert into especie(mat, nome, dtNasc) values (
                ${zelador.mat}, ${zelador.nome}, ${zelador.dtNasc}
            ) returning mat
    `
    const { mat } = response[0]
    return Number(mat)

}
export const getZeladorByEspecies =async (especie:any) => {
    const response = await sql`
        select * from zelador
        inner join zelador_jaula on zelador.mat = zelador_jaula.zelador_mat
        inner join jaula on zelador_jaula.jaula_cod = jaula.cod
        inner join especime on jaula.cod = especimes.jaula_cod
        inner join especie on especime.especie_id = especie.id
        where especie.id = ${especie.id}
    `
    const zelador = response.map((jsonObject) => getZelador(jsonObject));

    return zelador
}