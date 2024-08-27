import { useState } from 'react'
import { TransactionChart } from './components/TransactionChart.tsx';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Welcome to Binance App</h1>
      <TransactionChart />
    </>
  )
}

export default App
