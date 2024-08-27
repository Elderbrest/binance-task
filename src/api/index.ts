import { MainClient } from 'binance';
import { toast } from 'react-toastify';

const client = new MainClient();

export const getHistoricalTrades = async () => {
  try {
    return await client.getHistoricalTrades({ symbol: 'BTCUSDT' });
  } catch (error) {
    console.error(error);
    toast.error('Something', { position: 'top-center' });
  }
}
