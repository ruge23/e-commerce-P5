import React from 'react';
import { Link } from 'react-router';

class Favoritos extends React.Component{
	render(){
		return (
			<div>

					<nav className="navbar navbar-default fab">
					  <div className="container-fluid">
					    <div className="navbar-header">
					    	<div className="row">
					    		<div className="col-lg-3 jola">							    
									<img className="imash" src="https://scontent-eze1-1.xx.fbcdn.net/v/t1.0-9/18198386_1934770203434637_1847967577165529899_n.jpg?oh=d0b5b612f0807af2b338f3dac692dcfb&oe=5AAC7305"></img>					    
							    </div>
							    <div className="col-lg-6 hola">							    
									<a href="{ }"><h4><strong>Tucumano casi nuevo, buena conducta</strong></h4></a>	
									<p> Por favor no alimentar y mantener lejos del alcance de ninos, esta en excelente estado, suele comportarse hasta las 22hs y las 7hs. Mantener enjaulado durante ese horario. </p>			    
							    </div>
							    <div className="col-lg-3 jola">							    
									<center><h4> $4.500 </h4></center>	
									<br></br>			    
									<br></br>
									<p>
									<button className="btn btn-success baton" role="button">Comprar</button>   
									<button className="btn btn-danger baton" role="button">Eliminar</button>   
									</p>
							    </div>
					    	</div>  
					    </div>
					  </div>
					</nav>
				
			</div>
		)
	}
}

export default Favoritos