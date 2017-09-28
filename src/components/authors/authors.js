"use strict"

var React = require('react')
var AuthorActions = require('../../actions/authorActions')
var AuthorStore = require('../../stores/authorStore')
var AuthorList = require('./authorList')
var Router = require('react-router')
var Link = Router.Link

var Authors = React.createClass({
    getInitialState: function() {
        return {
            authors: AuthorStore.getAllAuthors()
        }
    },

    componentWillMount: function() {
        AuthorStore.addChangeListener(this._onChange)
    },

    componentWillUnmount: function() {
        AuthorStore.removeChangeListener(this._onChange)
    },

    _onChange: function() {
        debugger
        this.setState({
            authors: AuthorStore.getAllAuthors()
        })
    },
    
    render: function() {
        console.log('authors ', this.state.authors)
        var joinedAuthors = this.state.authors[0]
        if (this.state.authors[1]) {
            joinedAuthors.push(this.state.authors[1])
        }
        console.log('joined authors', joinedAuthors)
        return (
            <div>
                <h1>Authors</h1>
                <Link to="addAuthor" className="btn btn-default">Add Author</Link>
                <AuthorList authors={ joinedAuthors } />
            </div>
        )
    }
})

module.exports = Authors