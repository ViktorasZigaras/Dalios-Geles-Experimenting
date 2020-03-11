import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './redux/store/app'
import './index.scss'
import App from './components'
import * as serviceWorker from './serviceWorker'

ReactDOM.render( <Provider store={ store }><App /></Provider> , document.getElementById( 'container' ) )

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();