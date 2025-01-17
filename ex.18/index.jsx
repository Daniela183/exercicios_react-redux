//aula 443
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from 'redux'
import Field from './field'
import fieldReducer from './fieldReducer'

const reducers = combineReducers({
    field: fieldReducer,
    key2: () => 'teste'
})

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <Field initialValue='Teste' />
    </Provider>
    , document.getElementById('app'))