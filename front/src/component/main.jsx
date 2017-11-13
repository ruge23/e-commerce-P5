import React from 'react';
import { Link } from 'react-router';

class Main extends React.Component{
  render(){
    return(
      <div>
      <div>
              <div className="row">
                <div className="col-sm-6 col-md-4">
                  <div className="thumbnail">
                    <img src= "https://media.elobservador.com.uy/adjuntos/184/imagenes/000/295/0000295719.jpg" />
                    <div className="caption">
                      <h3>Laptop</h3>
                      <p><strong>Descripcion: </strong>Producto computadora</p>
                      <p><a href="#" className="btn btn-primary glyphicon glyphicon-shopping-cart" role="button"></a> <a href="#" className="btn btn-default" role="button">Comprar</a></p>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          <div>
          <div className="row">
            <div className="col-sm-6 col-md-4">
              <div className="thumbnail">
                <img src= "https://lh3.googleusercontent.com/-mkpW9Bdxn6A/UsCIUyyXrlI/AAAAAAAAdlY/ljcU1j8DIAs/s640/blogger-image--1856220240.jpg" />
                <div className="caption">
                  <h3>Veneno para tucumanos</h3>
                  <p><strong>Descripcion: </strong> Ideal si trabajas con uno cerca. Mantener lejos del alcance de ninos. Eficiencia comprobada</p>
                  <p><a href="#" className="btn btn-primary glyphicon glyphicon-shopping-cart" role="button"></a> <a href="#" className="btn btn-default" role="button">Comprar urgentemente</a></p>
                </div>
              </div>
            </div>
          </div>
      </div>
      </div>

    )
  }
};

export default Main;
