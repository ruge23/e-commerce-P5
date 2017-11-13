import React from 'react';
import ReactDom from 'react-dom';
import Navbar from './components/Navbar.jsx'
import Form from './components/Form.jsx'
class Main extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>

      <Navbar/>
      <Form/>

      </div>
    )
  }
}

ReactDom.render(<Main/>,document.getElementById('app'));
