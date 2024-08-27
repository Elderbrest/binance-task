import { ToastContainer } from 'react-toastify';
import { TransactionChart } from './components/TransactionChart.tsx';
import './App.css'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <h1>Welcome to Binance App</h1>
      <TransactionChart />
      <ToastContainer />
    </>
  )
}

export default App
