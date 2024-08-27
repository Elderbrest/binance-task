import { MainClient } from 'binance';

const client = new MainClient();

export const getHistoricalTrades = async () => {
  try {
    return await client.getHistoricalTrades({ symbol: 'BTCUSDT' });
  } catch (error) {
    console.error(error);
  }
}
