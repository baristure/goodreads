import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { fetchBooks } from '../../redux/actions/books'
import { fetchGenres } from '../../redux/actions/genres'
import BookList from '../booklist/Booklist';

class Books extends Component {
    static propTypes = {
        books: PropTypes.object.isRequired,
        genres:PropTypes.object.isRequired
    }
    componentDidMount() {
        this.props.fetchBooks();
        this.props.fetchGenres();
    }

    render() {

        return (
            <div>
                <BookList books={this.props.books}/>
                <div genres={this.props.genres}/>
            </div>
        )
    }
}

const mapStateToProps = ({ books,genres }) => {
    return {
        books,genres
    }
}

const mapDispatchToProps = {
    fetchBooks,fetchGenres
}

export default connect(mapStateToProps, mapDispatchToProps)(Books)
