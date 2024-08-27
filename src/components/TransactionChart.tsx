import React, { useState, useMemo } from 'react';
import { useQuery } from "@tanstack/react-query";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { getHistoricalTrades } from '../api';
import styles from './TransactionChart.module.scss';

const mapChartData = (items = []) => items.map(item => ({
  name: new Date(item.time).toLocaleTimeString(),
  amt: item.price,
  quantity: item.qty,
  quoteQuantity: item.quoteQty
}))

export const TransactionChart = () => {
  const [interval, setInterval] = useState(2000);
  const { data } = useQuery({
    queryFn: getHistoricalTrades,
    queryKey: ['trades'],
    refetchInterval: interval,
  });

  const chartData = useMemo(() => mapChartData(data), [data]);

  return (
    <>
      {interval > 0 ? (
        <button className={styles.button} onClick={() => setInterval(0)}>Stop data fetching</button>
      ) : (
        <button className={styles.button} onClick={() => setInterval(2000)}>Run data sync</button>
      )}
      <ResponsiveContainer className={styles.container}>
        <LineChart
          data={chartData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3"/>
          <XAxis dataKey="name"/>
          <YAxis label="Price"/>
          <Tooltip/>
          <Legend/>
          <Line type="monotone" dataKey="quoteQuantity" stroke="#8884d8" activeDot={{r: 8}}/>
          <Line type="monotone" dataKey="quantity" stroke="#82ca9d"/>
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};
