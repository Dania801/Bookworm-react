import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import SignupPage from './components/pages/SignupPage';
import DashboardPage from './components/pages/DashboardPage';
import NewBookPage from './components/pages/NewBookPage';
import ConfirmationPage from './components/pages/ConfirmationPage';
import UserRoute from './components/routes/UserRoute';
import GuestRoute from './components/routes/GuestRoute';
import TopNavigation from './components/navigation/TopNavigation';
import { connect } from 'react-redux';

const App = ({ location, isAuthenticated }) => <div className="ui container">
    { isAuthenticated && <TopNavigation />}
    <Route location={location} path="/" exact component={HomePage} />    
    <Route location={location} path="/confirmation/:token" exact component={ConfirmationPage} />
    <GuestRoute location={location} path="/login" exact component={LoginPage} />
    <UserRoute location={location} path="/dashboard" exact component={DashboardPage}/>
    <GuestRoute location={location} path='/signup' exact component={SignupPage} />
    <UserRoute location={location} path='/books/new' exact component={NewBookPage} />
</div>

App.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired
    }).isRequired,
    isAuthenticated: PropTypes.bool.isRequired
}

function mapStateToProps(state) {
    return {
        isAuthenticated: !!state.user.email
    }
}

export default connect(mapStateToProps)(App);
