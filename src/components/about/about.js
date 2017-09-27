"use strict"

var React = require('react')

var About = React.createClass({
    statics: {
        willTransitionTo: function (transition, params, query, callback) {
            if (!confirm('something questionable?')) {
                transition.about()
            } else {
                callback()
            }
        }, 
        willTransitionFrom: function (transition, component) {
            if (!confirm('something to exclaim!')) {
                transition.about()
            }
        }
    },
    render: function() {
        return (
            <div className="jumbotron">
                <h1>About</h1>
                <p>React, React Router, and Flux for ultra-responsive webapps.</p>
            </div>
        )
    }
})

module.exports = About
