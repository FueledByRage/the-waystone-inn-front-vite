import React from 'react'
import ProfilePage from '.'
import ReactDOM from 'react-dom/client'
import GlobalHeader from '../../components/Header/index.jsx'


ReactDOM.createRoot(
  document.getElementById('root')
).render(
  <React.StrictMode>
    <GlobalHeader />
    <ProfilePage />
  </React.StrictMode>
)