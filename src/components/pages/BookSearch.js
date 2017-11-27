import React, { Component } from 'react';
import api from '../../api';
import BookThumb from '../book-thumb/book-thumb';
import './BookSearch.css';
export default class BookSearch extends Component {

    constructor(props) {
        super(props)

        this.state = {
            searchData: null,
            searchText: ''
        }

        this.renderBookItems = this.renderBookItems.bind(this);

        this.handleInputChange = this.handleInputChange.bind(this)

        this.handleSearch = this.handleSearch.bind(this);

    }
    
    componentDidMount() {
        // api.books.search('Cool')
        // .then(res => {

        //     console.log(res);
        //     this.setState({
        //         searchData: res.data
        //     })

        // })
        // .catch(err => {

        //     alert('Error');
        // })
    }

    handleInputChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSearch(e) {
         api.books.search(this.state.searchText)
        .then(res => {

            console.log(res);
            this.setState({
                searchData: res.data
            })

        })
        .catch(err => {

            alert('Error');
        })

        e.preventDefault();
    }
    renderBookItems() {
        console.log('State ',this.state.searchData);
        if(this.state.searchData && this.state.searchData.items != undefined ) {

            return this.state.searchData.items.map((book,i) => {
               return(<BookThumb book={book} key={i}/>)
            })

        }

        

    }

    render () {
        return (
            <div className="bookSearchContainer">
                <h1>Book Search</h1>
                <form onSubmit={this.handleSearch}>
                    <input className="bsInput" name="searchText" type="text" onChange={this.handleInputChange.bind(this)} value={this.state.searchText}/>
                    <button className="bsButton bsBtnSearch" onClick={this.handleSearch}>Search</button>
                </form>
               <div className="bookSearchResultContainer"> { this.renderBookItems() }</div>
            </div>
        );
    }
}