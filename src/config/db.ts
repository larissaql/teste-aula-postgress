import postgres from 'postgres'

const sql = postgres('postgres://postgres:postgres@localhost/exemplopostgres')

export const createTables = async () => {

    await sql`
        drop table if exists especie
  `
  
    await sql`
        drop table if exists especime
    `
    
    await sql`
        drop table if exists zelador
    `
    
    await sql`
        drop table if exists jaula
    `
    
    await sql`
        drop table if exists jaula_zelador
    `
 

    await sql`
        create table especie(
            id integer primary key,
            nomeCientifico varchar not null,
            nomePop varchar not null,
            habitat varchar not null,
            familia varchar not null,
            ordem varchar not null
        )
    `
    await sql`
        create table jaula(
            cod integer primary key,
            area decimal not null,
            zelador varchar not null
        )
    `

    await sql`
        create table especime(
            id integer primary key,
            numSerie integer not null,
            apelido varchar,
            especie_id integer references especie(id)
            jaula_id integer references jaula(cod)
        )
    `

    await sql`
        create table zelador(
            mat integer primary key,
            nome varchar not null,
            dtNasc date not null
        )
    `

    await sql`
        create table jaula_zelador(
            cod_jaula integer not null,
            mat_zelador integer not null,
            primary key (cod_jaula, mat_zelador),
            constraint fk_jaula foreign key (cod_jaula) references jaula(cod) on delete cascade,
            constraint fk_zelador foreign key(mat_zelador) references zelador(mat)
            )
    
    `
    await sql`
        delete from especie
    `
    
    await sql`
        delete from especime
    `
    
    await sql`
        delete from zelador
    `
    
    await sql`
        delete from jaula
    `

}

export default sql
   
