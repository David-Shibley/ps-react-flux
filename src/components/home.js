"use strict"

var React = require('react')
var Router = require('react-router')
var Link = Router.Link

var Home = React.createClass({
    render: function() {
        return (
            <div className="jumbotron">
                <h1>Hello Beautiful Being you ;-)</h1>
                <p>Home page.</p>
                <Link to="about">Learn more</Link>
            </div>
        )
    }
})

module.exports = Home
