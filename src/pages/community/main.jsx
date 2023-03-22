import React from 'react'
import Community from '.'
import ReactDOM from 'react-dom/client'
import GlobalHeader from '../../components/Header/index.jsx'
import '../../global.css';

ReactDOM.createRoot(
  document.getElementById('root')
).render(
  <React.StrictMode>
    <GlobalHeader />
    <Community />
  </React.StrictMode>
)