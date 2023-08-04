import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './redux/store/store.jsx'
import App from './styles/App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
      <App />
  </Provider>,
)
