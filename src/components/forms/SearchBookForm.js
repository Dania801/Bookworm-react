import React from 'react';
import { Form, Dropdown } from 'semantic-ui-react';
import axios from 'axios';

class SearchBookForm extends React.Component{
    state = {
        query: '',
        loading: false, 
        options: [{
            key: 1, 
            value: 1,
            text: "first book"
        },{
            key: 2, 
            value: 2,
            text: "second book"
        }],
        books: {

        }
    }

    onSearchChange = (e, data) => {
        console.log('timer ==> ', this.timer)
        clearTimeout(this.timer);
        this.setState({
            query: data
        });
        this.timer = setTimeout(this.fetchOptions, 1000);
    }

    fetchOptions = () => {
        if(!this.state.query) return;
        this.setState({ loading: true });
        axios(`/api/books/search?q=${this.state.query}`)
            .then(res => res.data.books)
    }

    render(){
        return (
            <Form>
                <Dropdown 
                    search
                    fluid
                    placeholder = "Search for a book by title"
                    value={this.state.query}
                    onSearchChange = {this.onSearchChange}
                    options={this.state.options}
                    loading={this.state.loading}
                />
            </Form>
        )
    }
}

export default SearchBookForm;