"use strict"

var Dispatcher = require('../dispatcher/appDispatcher')
var AuthorApi = require('../api/authorApi')
var ActionTypes = require('../constants/actionTypes')

var AuthorActions = {
    createAuthor: function(author) {
        var newAuthor = AuthorApi.saveAuthor(author)

        Dispatcher.dispatch({
            actionType: ActionTypes.CREATE_AUTHOR,
            data: newAuthor
        })
    },

    updateAuthor: function(author) {
        console.log('updating ', author)
        var updatedAuthor = AuthorApi.saveAuthor(author)
        
        console.log('updated ', updatedAuthor)
        Dispatcher.dispatch({
            actionType: ActionTypes.UPDATE_AUTHOR,
            data: updatedAuthor
        })
    },

    deleteAuthor: function(id) {
        debugger
        AuthorApi.deleteAuthor(id)
        
        Dispatcher.dispatch({
            actionType: ActionTypes.DELETE_AUTHOR,
            id: id
        })
    }
}

module.exports = AuthorActions