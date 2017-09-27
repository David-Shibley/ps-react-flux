"use strict"

var React = require('react')

var Router = require('react-router')
var DefaultRoute = Router.DefaultRoute
var Route = Router.Route
var NotFoundRoute = Router.NotFoundRoute
var Redirect = Router.Redirect

var routes = (
    <Route name="app" path="/" handler={require('./components/app')}>
        <DefaultRoute handler={require('./components/home')} />
        <Route name="authors" handler={require('./components/authors/authors')} />
        {/* <Route name="authors/:authorId" handler={require('./components/authors/author')} /> */}
        <Route name="about" handler={require('./components/about/about')} />
        <NotFoundRoute handler={require('./components/notFound')} />
        <Redirect from="about-us" to="about" />
        <Redirect from="awthurs" to="authors" />
        <Redirect from="about/*" to="about" />
    </Route>
)

module.exports = routes