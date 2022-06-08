const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({extended: true});
const sqlite3 = require('sqlite3').verbose();
const dbPath = 'curriculo2.db';
api='http://127.0.0.1:3071'

function GetSkills(){
    var login = $("#skill1").val();
    var senha = parseInst($("#skill2").val());

    $.get(`http://127.0.0.1:3071/users?login="${skill1}"&senha=${skill2}`, function(resultado){
        var tx = ""
        if(Array.isArray(resultado)){
            resultado.array.forEach(element => {
                tx+='<div class="title"></div>' + element.title + '</div>';
            }); 
        }else{
            tx = resultado;
        }
        $("#insert").html(tx);
    })
}
//R(read)-CRUD
app.get("/sophia-dias", (req,res)=>{
    res.statusCode = 200;
    res.setHeader('Acess-Control-Allow-Origin','*')
    var db = new sqlite3.Database(dbPath);
    var sql = 'SELECT * FROM skills ORDER BY skill COLLATE NOCASE';
	db.all(sql, [],  (err, rows ) =>{
		if (err) {
		    throw err;
		};
		res.json(rows);
	});
	db.close();
//C(creat)-CRUD
app.post('/skill-insert', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');

	sql = "INSERT INTO skills (skill1,skill2) VALUES ('" + req.body.title + "', aprendizado contínuo, comunicação)";
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
app.post('/skill-update', urlencodedParser, (req, res) => {
	res.statusCode = 200;

	sql = "UPDATE skils SET skill1 = '" + req.body.title + "' WHERE id = " + req.body.skillId;
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
app.post('/skill-delete', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	sql = "DELETE FROM skills WHERE id = " + req.body.skillId;
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
  })
});