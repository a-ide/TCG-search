import React from 'react'
import ReactDOM from 'react-dom'
import App from './modules/frontend/App.jsx'
import './css/list.scss'
import DisplayToggle from './modules/frontend/DisplayToggle'

ReactDOM.render(<App />, document.getElementById('root'));
DisplayToggle('js-toggle-trigger')
