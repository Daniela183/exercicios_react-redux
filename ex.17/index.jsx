//aula 441
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Field from './field'
import { combineReducers, createStore } from 'redux'

const reducers = combineReducers({
    field: () => ({ value: 'Opa' })
})

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <Field initialValue='Teste' />
    </Provider>
    , document.getElementById('app'))