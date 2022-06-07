
var mysql = require("mysql")

var con = mysql.createConnection({
    host: '119.194.240.110',
    port: 33006,
    user: 'tlsl13',
    password: '1234',
    database: 'DBtest' 
});

con.connect()

sql = "SELECT * FROM temperature"

con.query(sql, function(err, rows) {
    if(err) throw error;
    console.log(rows)
});

con.end()
