import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import Businesses from '../components/Businesses'
import BusinessForm from '../components/BusinessForm'
import { fetchBusinesses } from '../actions/fetchBusinesses'
import Business from '../components/Business'
import BusinessFormEdit from '../components/BusinessFormEdit'

class BusinessContainer extends React.Component {

    componentDidMount() {
        this.props.fetchBusinesses();
    }
    //<Route path='/businesses' render={(routerProps) => <Businesses {...routerProps} Businesses={this.props.Businesses}/>}/>--

    // <Route path='/accounts/:id' render={(routerProps) => <Account {...routerProps} accounts={this.props.accounts}/>}/>
    // <Route path='/accounts' render={(routerProps) => <Accounts {...routerProps} accounts={this.props.accounts}/>}/>

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
// <Businesses {...routerProps} businesses={this.props.businesses} />
const mapStateToProps = (state) => {
    return {
        businesses: state.businesses,
    };
};

export default connect(mapStateToProps, { fetchBusinesses })(BusinessContainer);