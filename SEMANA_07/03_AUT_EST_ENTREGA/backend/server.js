const express = require('express');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded ({extended:false});
const sqlite3 = require('sqlite3').verbose();
const dbPath = 'curriculosql.db';
const hostname = '127.0.0.1';
const port = 3071;
const app = express();
app.use(express.static("../frontend/"))

app.use(express.json())
//R(read)-CRUD
app.get("/sophia-dias", (req,res)=>{
    res.statusCode = 200;
    res.setHeader('Acess-Control-Allom-Origin','*')
    var db = new sqlite3.Database(dbPath);
    var sql = 'SELECT * FROM graduacao ORDER BY title COLLATE NOCASE';
	db.all(sql, [],  (err, rows ) => {
		if (err) {
		    throw err;
		}
		res.json(rows);
	});
	db.close();
});
//C(creat)-CRUD
app.post('/userinsert', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');

	sql = "INSERT INTO graduacao (ensinoMedio, ensinoSuperior) VALUES ('" + req.body.title + "', 33, false)";
	var db = new sqlite3.Database(dbPath); 
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
	});
	db.close(); 
	res.end();
});
//U(update)-CRUD
app.post('/userupdate', urlencodedParser, (req, res) => {
	res.statusCode = 200;

	sql = "UPDATE graduacao SET ensinoMedio = '" + req.body.title + "' WHERE id = " + req.body.userId;
	var db = new sqlite3.Database(dbPath); 
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
		res.end();
	});
	db.close(); 
});
//D(delete)-CRUD
app.post('/userdelete', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	sql = "DELETE FROM graduacao WHERE id = " + req.body.userId;
	var db = new sqlite3.Database(dbp); 
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
		res.end();
	});
	db.close(); 
});

app.listen(port, hostname, () => {
    console.log(`Page server running at http://${hostname}:${port}/sophia-dias`);
  });