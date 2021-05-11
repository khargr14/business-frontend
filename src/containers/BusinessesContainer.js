import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import Businesses from '../components/Businesses'
import BusinessForm from '../components/BusinessForm'
import { fetchBusinesses } from '../actions/fetchBusinesses'
import Business from '../components/Business'
import BusinessFormEdit from '../components/BusinessFormEdit'

//stateful class container

class BusinessContainer extends React.Component {

    componentDidMount() {
        console.log("a")
        this.props.fetchBusinesses();
        console.log("b")
    }
    //<Route path='/businesses' render={(routerProps) => <Businesses {...routerProps} Businesses={this.props.Businesses}/>}/>--

  
    render() {
        console.log('this biz props==>>', this.props)
        return (
            <div>
                <Switch>
                    <Route path='/businesses/new' component={BusinessForm} />
                    <Route path='/businesses/:id/edit' render={(routerProps) => <BusinessFormEdit {...routerProps} businesses={this.props.businesses} />} />
                    <Route path='/businesses/:id' render={(routerProps) => <Business {...routerProps} businesses={this.props.businesses} />} />
                    <Route path='/businesses' render={(routerProps) => <Businesses {...routerProps} businesses={this.props.businesses} />} />
                </Switch>
            </div>
        )
    }
}
// <Businesses {...routerProps} businesses={this.props.businesses}  storing data/>
const mapStateToProps = (state) => {
    return {
        businesses: state.businesses,
    };
};

export default connect(mapStateToProps, { fetchBusinesses })(BusinessContainer);

