import React from 'react'
import ReactDOM from 'react-dom'
import App from './modules/frontend/App.jsx'
import './css/list.scss'
import displayToggle from './modules/frontend/displayToggle'

ReactDOM.render(<App />, document.getElementById('root'));
displayToggle('js-toggle-trigger')


