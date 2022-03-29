var http = require('http');
var mysql = require('mysql');
var connection = mysql.createPool({
    connectionLimit: 1,
    host: "xxxx",
    user: "xxxx",
    password: "xxxx",
    database: "xxxxx"
});
var server = http.createServer(function (req, res) {
    connection.query("INSERT INTO person (email, name, address) VALUES ('Futterkiste', 'Alfreds', 'Obere Str. 57')", function (err, rows, fields) {
        if (!err)
            console.log('The solution is: ', rows);
        else {
            console.log('Error while performing Query.');
        }
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello World');
    });
});
server.listen(1337, '127.0.0.1');
server.on('close', function () {
    connection.end();
})
console.log('Server running at http://127.0.0.1:1337/');

//apache benchmark
//ab -n 1000 -c 100 http://localhost:1337/
