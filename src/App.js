import React from 'react';
import {connect} from 'react-redux'
import {fetchBusinesses} from './actions/fetchBusinesses'


class App extends React.Component{

  componentDidMount(){
    
  }
  render(){
    return(
      <div className="App">
        App
      </div>

    );
  }
}

export default connect( null, {fetchBusinesses})(App);
