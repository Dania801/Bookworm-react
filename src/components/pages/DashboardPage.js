import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ConfirmEmailMessage from '../messages/ConfirmEmailMessage';
import { allBooksSelector } from '../../reducers/books';
import AddBookCtA from '../ctas/AddBookCtA';

const DashboardPage = ({ isConfirmed, books }) => (
    <div>
        { !isConfirmed && <ConfirmEmailMessage />}
        {!books.length && <AddBookCtA />}
    </div>
);

DashboardPage.propTypes = {
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
    }
}

export default connect(mapStateToProps)(DashboardPage);