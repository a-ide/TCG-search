import React from 'react'
import ReactDOM from 'react-dom'
import App from './modules/frontend/App.jsx'
import DisplayToggle from './modules/frontend/DisplayToggle'
import './css/style.scss'

ReactDOM.render(<App />, document.getElementById('root'));
DisplayToggle('js-toggle-trigger')
DisplayToggle('js-toggle-search')
