const express = require('express');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded ({extended:false});
const sqlite3 = require('sqlite3').verbose();
const dbPath = 'curriculo.db';
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
    var sql = 'SELECT * FROM tbUser ORDER BY title COLLATE NOCASE';
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

	sql = "INSERT INTO tbUser (title, id, completed) VALUES ('" + req.body.title + "', 33, false)";
	var db = new sqlite3.Database(DBPATH); 
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

	sql = "UPDATE tbUser SET title = '" + req.body.title + "' WHERE userId = " + req.body.userId;
	var db = new sqlite3.Database(DBPATH); 
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
	sql = "DELETE FROM tbUser WHERE userId = " + req.body.userId;
	var db = new sqlite3.Database(DBPATH); 
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
		res.end();
	});
	db.close(); 
});

app.listen(port, hostname, () => {
    console.log(`Page server running at http://${hostname}:${port}/`);
  });