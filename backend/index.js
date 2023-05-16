const express = require('express');
const cors = require('cors');
const {port, host} = {port:'8081',  host: 'localhost'};


const app = express();
app.use(cors());
const mysql = require('mysql');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sakila'
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get('/films', (req, res) => {
    const {
        pathname,
        searchParams
    } = new URL( `http://${host}:${port}${req.url}`);

    let q = 'SELECT title, description FROM film limit 10';

    db.query(q, (err, data) => {
        if (searchParams.has('id')) {
            data = data.filter(film => film.film_id === searchParams.get('id'));
            return res.json(data)
        }
        
        return res.json(data);
    });
});
app.get('/actors', (req, res) => {
    let q = 'SELECT  first_name, last_name FROM actor limit 10';

    db.query(q, (err, data) => {

        return res.json(data);
    });
});


app.listen(8081, () => {
    console.log('Server is running on port 3000');
});