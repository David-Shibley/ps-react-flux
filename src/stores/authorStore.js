"use strict"

var Dispatcher = require('../dispatcher/appDispatcher')
var ActionTypes = require('../constants/actionTypes')
var EventEmitter = require('events').EventEmitter
var assign = require('object-assign')
var _ = require('lodash')
var CHANGE_EVENT = 'change'

var _authors = []

var AuthorStore = assign({}, EventEmitter.prototype, {
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback)
    },

    removeChangeListener: function(callback) {
        this.removeChangeListener(CHANGE_EVENT, callback)
    },

    emitChange: function() {
        this.emit(CHANGE_EVENT)
    },

    getAllAuthors: function() {
        return _authors
    },

    getAuthorById: function(id) {
        console.log('calling get by id with lodash', _authors)
        return _.find(_authors[0], {id: id})
    }
})

Dispatcher.register(function(action) {
    console.log('action', action)
    switch(action.actionType) {
        case ActionTypes.CREATE_AUTHOR: 
            _authors.push(action.data)
            AuthorStore.emitChange()
            break
        case ActionTypes.DELETE_AUTHOR: 
            debugger
            _.remove(_authors, function(author) {
                return action.id === author.id
            })
            AuthorStore.emitChange()
            break
        case ActionTypes.UPDATE_AUTHOR:
            var existingAuthor = _.find(_authors[0], { id: action.id })
            var existingAuthorIndex = _.indexOf(_authors[0], existingAuthor)
            _authors.slice(existingAuthorIndex, 1, action.author)
            AuthorStore.emitChange()
            break
        case ActionTypes.INITIALIZE:
            _authors.push(action.initialData.authors)
            AuthorStore.emitChange()
            break
        default:
    }
})

module.exports = AuthorStore