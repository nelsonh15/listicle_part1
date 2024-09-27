import pool from './database';
import dotenv from './dotenv';
import playersData from '../data/players';

const createPlayersTable = async () => {
    const createTableQuery = `
    DROP TABLE IF EXISTS players;

    CREATE TABLE IF NOT EXISTS players (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        team VARCHAR(10) NOT NULL,
        position VARCHAR(255) NOT NULL,
        image VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
    )
    `
    try {
        const res = await pool.query(createTableQuery)
        console.log('🎉 gifts table created successfully')
    }
    catch (err) {
        console.error('Error')
    }
}

const seedPlayersTable = async () => {
    await createPlayersTable()

    playerData.forEach((gift) => {
        const insertQuery = {
            text: 'INSERT INTO players (name, team, position, image, description) VALUES ($1, $2, $3, $4, $5)'
        }

        const values = [
            player.name,
            player.team,
            player.position,
            player.image,
            player.description,
        ]

        pool.query(insertQuery, values, (err, res) => {
            if (err) {
                console.error('⚠️ error inserting gift', err)
                return
            }

            console.log(`✅ ${player.name} added successfully`)
        })
    })
}

seedPlayersTable()
