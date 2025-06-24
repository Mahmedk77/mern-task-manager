import express from 'express';

const app = express();

app.get('/about', (req,res) => {
    res.status(404).send("this is from server")
})


app.listen(5000, () => {
    console.log('http://localhost:5000')
})