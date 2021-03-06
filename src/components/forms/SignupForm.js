import React from 'react';
import { Form, Button, Message } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import Validator from 'validator';
import InlineError from '../messages/InlineError';

class SignupForm extends React.Component {
    state = {
        data: {
            email: '',
            password: ''
        },
        loading: false, 
        errors: {}
    }

    onChange = e => { // universal on change for all text fields within data object 
        this.setState({
            data: {
                ...this.state.data, // save the previous state of data
                [e.target.name]: e.target.value
            }
        })
    }

    onSubmit = () => {
        const errors = this.validate(this.state.data);
        this.setState({ errors });
        if (!Object.keys(errors).length) {
            this.setState({ loading: true });
            console.log('Data ===> ', this.state.data);
            this.props.submit(this.state.data)
                .catch(err => this.setState({ errors: err.response.data.errors, loading: false }));
        }
    }

    validate = (data) => {
        console.log(data.password);
        console.log(this.state.password);
        const errors = {};
        if (!data.password)
            errors.password = "Can't be blank!"
        if (!Validator.isEmail(data.email))
            errors.email = "Invalid email!"
        return errors;
    }

    render() {
        const { data, errors, loading } = this.state;
        return (
            <Form onSubmit={this.onSubmit} loading={loading}>
                { errors.global && <Message negative>
                        <Message.Header>Something went wrong!</Message.Header>
                        <p>{errors.global}</p>
                    </Message>}
                <Form.Field error={!!errors.email}>
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder="example@example.com"
                        value={data.email}
                        onChange={this.onChange}
                    />
                </Form.Field>
                <Form.Field error={!!errors.password}>
                    { errors.email && <InlineError text={errors.email} />}
                    <label htmlFor="email">password</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        placeholder="Make it secure"
                        value={data.password}
                        onChange={this.onChange}
                    />
                    { errors.password && <InlineError text={errors.password} />}
                </Form.Field>
                <Button secondary>Signup</Button>
            </Form>
        );
    }
}

SignupForm.propTypes = {
    submit: PropTypes.func.isRequired
}

export default SignupForm;