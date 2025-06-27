import express from 'express';
import cors from 'cors';
import { connectToDataBase } from './mongoDB/database.js';
import taskRoute from './routes/tasks.routes.js';
import { BASE_URL } from './config/env.config.js';

const app = express();
app.use(cors());

app.use(express.json());

app.use('/api/v1/task', taskRoute)


app.get('/', (req,res) => {
    res.send("this is from server")
})

app.listen(5000, async () => {
    console.log(BASE_URL)
    await connectToDataBase()
});