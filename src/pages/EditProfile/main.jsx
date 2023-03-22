import React from 'react'
import { EditProfile } from '.'
import ReactDOM from 'react-dom/client'
import GlobalHeader from '../../components/Header/index.jsx'


ReactDOM.createRoot(
  document.getElementById('root')
).render(
  <React.StrictMode>
    <GlobalHeader />
    <EditProfile />
  </React.StrictMode>
)