import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './Home/index.jsx';
import '../global.css';
import GlobalHeader from '../components/Header/index.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalHeader />
    <HomePage />
  </React.StrictMode>
)
