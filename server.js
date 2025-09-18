const http = require('http');
const fs = require('fs');
const url = require('url');
//call back function
serveStatic = function (req, res) {
	let fileName = '.' + url.parse(req.url).pathname;
	fs.readFile(fileName, function(err, data){
		if (err)
		{
			res.writeHead(404, {'Content-Type': 'text/plain' });
			res.write('Error 404: resource ' + filename + ' not found');
			res.end();
		}
		else{
			res.writeHead(200, {'Content-Type': 'text/plain' });
			res.write(data);
			res.end();
		}
	}
);
}
 
const myserver = http.createServer(serveStatic); //create a server object
myserver.listen(80, function() {console.log("Listening on port 80" )}); 

