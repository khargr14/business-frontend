import React from 'react';
import {Link} from 'react-router-dom';
//import {connect} from 'react-redux'
//import {fetchBusinesses} from './actions/fetchBusinesses'
// import BusinessContainer from './containers/BusinessesContainer'

/**
 * stateless / presentational /
 */
const Home = () => {
    return (
      <div>
        <h1>Click on Business to see a list of Businesses or <br/>
            Click on New Business to add a Business </h1>
      </div>
    );
}

export default Home;

