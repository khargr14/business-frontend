import React from 'react'
import {connect} from 'react-redux'
import Businesses from '../components/Businesses'
import BusinessForm from '../components/BusinessForm'
import { fetchBusinesses } from '../actions/fetchBusinesses'

class BusinessContainer extends React.Component{

    componentDidMount() {
       this.props.fetchBusinesses();
    }

    render(){
        return(
           <div>
             <BusinessForm/>
             <Businesses/>
             
           </div> 
        )
    }
}

const mapStateToProps = (state) => {
    return {
        businesses: state.businesses,
    };
};

export default connect(mapStateToProps, { fetchBusinesses })(BusinessContainer);