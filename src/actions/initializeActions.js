"use strict"

var Dispatcher = require('../dispatcher/appDispatcher')
var AuthorApi = require('../api/authorApi')
var ActionTypes = require('../constants/actionTypes')

var InitializeActions = {
    initApp: function() {
        console.log('initializing')
        Dispatcher.dispatch({
            actionType: ActionTypes.INITIALIZE,
            initialData: {
                authors: AuthorApi.getAllAuthors()
            }
        })
    }
}

module.exports = InitializeActions