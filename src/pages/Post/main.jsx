import React from 'react'
import Post from '.'
import ReactDOM from 'react-dom/client'
import '../../global.css'
import GlobalHeader from '../../components/Header/index.jsx'


ReactDOM.createRoot(
  document.getElementById('root')
).render(
  <React.StrictMode>
    <GlobalHeader />
    <Post />
  </React.StrictMode>
)