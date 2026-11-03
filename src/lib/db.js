import mysql from 'mysql2/promise'
import { getSecret } from 'astro:env/server'

let pool

function getPool() {
    pool = mysql.createPool({
        host: getSecret('MYSQL_HOST'),
        port: getSecret('MYSQL_PORT'),
        database: getSecret('MYSQL_DATABASE'),
        user: getSecret('MYSQL_USER'),
        password: getSecret('MYSQL_PASSWORD'),
        charset: "utf8mb4",
        connectionLimit: 5,
        connectTimeout: 5000
    })
    return pool
}

export async function getAllProducts() {
    const [productos] = await getPool().query(
        'SELECT id, nombre, precio FROM productos ORDER BY id'
    )
    return productos
}