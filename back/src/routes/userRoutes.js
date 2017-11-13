const pg = require('pg');
var conString = 'postgres://localhost:5432/ecommerce';

var query_productos = "SELECT row_to_json(tc) FROM (SELECT array_to_json(array_agg(f)) As Datos FROM (" +
                "SELECT ST_AsGeoJSON(lg.geom)::json As geometry, row_to_json((id_product,nombre," +
                "id_categoria,precio,descripcion,stock,img_url)) As properties" +
                "FROM productos As lg) As f) As fc";


module.exports = function (app){
  app.get('/',(req,res)=>{
    res.json([]);
  });
  app.get('/api',function(){
    var client = new pg.Client(conString);
    client.connect();
    var query = client.query(query_productos);
    query.on("row",function(row,result){
      result.addRow(row);
    });
    query.on("end",function(result){
      res.json(result.rows[0].row_to_json);
      res.end();
    });
  });
};
