import React from 'react';
//import {connect} from 'react-redux'
//import {fetchBusinesses} from './actions/fetchBusinesses'
import BusinessContainer from './containers/BusinessesContainer'

class App extends React.Component{

  componentDidMount(){
    
  }
  render(){
    return(
     <BusinessContainer/>

    );
  }
}

export default App;
