import React from 'react'

import './App.css'

// Components
import Header from './components/Header'
import Balance from './components/Balance'

const App = () => {
  return (
    <div>
      <Header title="Expense Tracker" />
    <div className="container">
      <Balance />
    </div>
    </div>
  )
}

export default App