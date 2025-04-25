import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateAsset } from './slices/cryptoSlice';
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  const assets = useSelector(state => state.crypto.assets);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * assets.length);
      const asset = assets[randomIndex];

      const updated = {
        ...asset,
        price: +(asset.price * (0.95 + Math.random() * 0.1)).toFixed(2),
        percentChange1h: +(Math.random() * 10 - 5).toFixed(2),
        percentChange24h: +(Math.random() * 10 - 5).toFixed(2),
        percentChange7d: +(Math.random() * 10 - 5).toFixed(2),
        volume24h: Math.floor(asset.volume24h * (0.9 + Math.random() * 0.2)),
      };

      dispatch(updateAsset(updated));
    }, 2000);

    return () => clearInterval(interval);
  }, [dispatch, assets]);

  const getColor = (value) => (value > 0 ? 'green' : value < 0 ? 'red' : 'gray');

  return (
    <div className="container">
      <h1>📊 Real-Time Crypto Price Tracker</h1>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Symbol</th>
              <th>Price</th>
              <th>1h %</th>
              <th>24h %</th>
              <th>7d %</th>
              <th>Market Cap</th>
              <th>Volume (24h)</th>
              <th>Circulating Supply</th>
              <th>last 7 days</th>
            </tr>
          </thead>
          <tbody>
            {assets.map((a, i) => (
              <tr key={a.id}>
                <td>{i + 1}</td>
                <td>{a.name}</td>
                <td>{a.symbol}</td>
                <td>${a.price}</td>
                <td style={{ color: getColor(a.percentChange1h) }}>{a.percentChange1h}%</td>
                <td style={{ color: getColor(a.percentChange24h) }}>{a.percentChange24h}%</td>
                <td style={{ color: getColor(a.percentChange7d) }}>{a.percentChange7d}%</td>
                <td>${a.marketCap.toLocaleString()}</td>
                <td>${a.volume24h.toLocaleString()}</td>
                <td>{a.circulatingSupply.toLocaleString()}</td>
                <td>
                  <img src="https://www.tableau.com/sites/default/files/2021-09/Line%20Chart%201%20-%20Good%20-%20900x650.png" alt="Chart" width={50} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;