import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './styles/App.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/store/store.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
      <App />
  </Provider>,
)
