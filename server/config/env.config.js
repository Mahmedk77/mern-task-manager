import {config} from 'dotenv'

config({path:'.env.development.local'});

export const {DB_URI, BASE_URL, PORT} = process.env