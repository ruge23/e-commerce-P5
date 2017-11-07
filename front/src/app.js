import React from 'react';
import ReactDom from 'react-dom';

class Main extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <h1>Quiere Biiiijaaaa!!</h1>
    )
  }
}

ReactDom.render(<Main/>,document.getElementById('app'));
