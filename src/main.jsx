import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import './index.css'
import { store } from './store'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
      <Provider store={ store }>
        <AppRouter />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
