import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { signup } from '../../actions/signup';
import SignupForm from '../forms/SignupForm';

class SignupPage extends React.Component {

    submit = (data) => this.props.signup(data).then(() => this.props.history.push('/dashboard'))

    render() {
        return (
            <div>
                <h1>Signup Page</h1>
                <SignupForm submit={this.submit}/>
            </div>
        );
    }
}

SignupPage.propTypes = {
    signup: PropTypes.func.isRequired,

    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired
}

export default connect(null, { signup })(SignupPage); 

