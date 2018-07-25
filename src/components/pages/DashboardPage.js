import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ConfirmEmailMessage from '../messages/ConfirmEmailMessage';
<<<<<<< HEAD
import { allBooksSelector } from '../../reducers/books';
import AddBookCtA from '../ctas/AddBookCtA';

const DashboardPage = ({ isConfirmed, books }) => (
    <div>
        { !isConfirmed && <ConfirmEmailMessage />}
        {!books.length && <AddBookCtA />}
=======

const DashboardPage = ({ isConfirmed }) => (
    <div>
        { !isConfirmed && <ConfirmEmailMessage />}
>>>>>>> 3827226... Authorized routes
    </div>
);

DashboardPage.propTypes = {
<<<<<<< HEAD
    isConfirmed: PropTypes.bool.isRequired,
    books: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired
    })).isRequired
};

function mapStateToProps(state) {
    console.log(state)
    return {
        isConfirmed: state.user.confirmed,
        books: allBooksSelector(state)
=======
    isConfirmed: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
    console.log(state)
    return {
        isConfirmed: state.user.confirmed 
>>>>>>> 3827226... Authorized routes
    }
}

export default connect(mapStateToProps)(DashboardPage);