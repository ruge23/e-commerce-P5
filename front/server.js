const http = require('http');
const fs = require ('fs');
const path = require ('path');

function start(){
  function onRequest(req,res){
    var ruta = '.' + ((req.url=='/') ? '/public/index.html': req.url);
    var extension = path.extname(ruta); //Obtiene la extensión del archivo
    var contentType = 'text/html';
    switch (extension){
      case '.js': contentType = 'text/javascript';
                  break;
      case '.css': contentType = 'text/css';
                  break;
    }
    fs.exists(ruta,function(bExist){
      if (bExist){
        fs.readFile(ruta, function(bError, content){
          if (bError){
            res.writeHead(500);
            res.end();
          }else{
            res.writeHead(200,{'content-type':contentType });
            res.end(content);
          }
        });
      }else{
        res.writeHead(404);
        res.end();
      }
    });
  }
  http.createServer(onRequest).listen(3002,()=>{
    console.log('Servidor de frontend ok');
  });
}

start();
