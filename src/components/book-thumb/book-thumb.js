import React from 'react'
import PropTypes from 'prop-types'
import './book-thumb.css';
const bookThumb = ({book}) => (
    <div className="book-thumb">
        <img src={book.volumeInfo.imageLinks.smallThumbnail} alt=""/>
        <div className="description">{book.volumeInfo.title}</div>
    </div>
)

bookThumb.propTypes = {
    book: PropTypes.object
}

export default bookThumb