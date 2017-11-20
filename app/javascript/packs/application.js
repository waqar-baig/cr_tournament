import ReactOnRails from 'react-on-rails';
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import todoApp from '../src/reducers'
import App from '../src/components/App'

let store = createStore(todoApp, applyMiddleware(thunk))
// This is how react_on_rails can see the HelloWorld in the browser.
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
