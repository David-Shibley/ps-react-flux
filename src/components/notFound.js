"use strict"

var React = require('react')
var Router = require('react-router')
var Link = Router.Link

var NotFound = React.createClass({
    render: function () {
        return (
            <div className="jumbotron">
                <h1>404 Page Not Found.</h1>
                <Link to="app">Home</Link>
            </div>
        )
    }
})

module.exports = NotFound
