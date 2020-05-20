import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import  { fetchBooks } from '../../redux/actions/books'


class Book extends Component {
    static propTypes = {
        books: PropTypes.object.isRequired
    }
componentDidMount(){
    this.props.fetchBooks()
}
    render() {
        return (
            <div>
                <div>Books</div>
            </div>
        )
    }
}

const mapStateToProps = ({books}) => {
    return{
        books
    }
}

const mapDispatchToProps = {
    fetchBooks
}

export default connect(mapStateToProps, mapDispatchToProps)(Book)
