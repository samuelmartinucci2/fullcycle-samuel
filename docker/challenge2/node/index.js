const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};
const mysql = require('mysql')

const exphbs  = require('express-handlebars');
app.engine('hbs', exphbs.engine({extname: '.hbs', defaultLayout: 'main'}));
app.set('view engine', 'hbs');

app.get('/', (req,res) => {
    const con = mysql.createConnection(config)
    con.query("SELECT * FROM people", function (err, result, fields) {
      if (err) console.log(err);
      res.render('index', {
        rows: result
      });
    });
    con.end();
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})
