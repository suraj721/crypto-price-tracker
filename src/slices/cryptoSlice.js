import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  assets: [
    {
      id: 1,
      name: '🪙 Bitcoin',
      symbol: 'BTC',
      price: 50000,
      percentChange1h: 0.5,
      percentChange24h: 1.2,
      percentChange7d: -0.3,
      marketCap: 900000000,
      volume24h: 35000000,
      circulatingSupply: 19000000,
      maxSupply: 21000000,
      logo: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
      chartImage: 'https://www.svgrepo.com/show/354261/graph.svg',
    },
    {
      id: 2,
      name: '🪙 Ethereum',
      symbol: 'ETH',
      price: 3000,
      percentChange1h: -0.2,
      percentChange24h: 0.8,
      percentChange7d: 1.5,
      marketCap: 400000000,
      volume24h: 15000000,
      circulatingSupply: 115000000,
      maxSupply: null,
      logo: 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
      chartImage: 'https://www.svgrepo.com/show/354261/graph.svg',
    },
    {
      id: 3,
      name: '🪙 Tether',
      symbol: 'USDT',
      price: 1,
      percentChange1h: 0,
      percentChange24h: 0,
      percentChange7d: 0,
      marketCap: 60000000,
      volume24h: 12000000,
      circulatingSupply: 60000000,
      maxSupply: null,
      logo: 'https://cryptologos.cc/logos/tether-usdt-logo.png',
      chartImage: 'https://www.svgrepo.com/show/354261/graph.svg',
    },
    {
      id: 4,
      name: '🪙 Binance Coin',
      symbol: 'BNB',
      price: 450,
      percentChange1h: 1.1,
      percentChange24h: -0.4,
      percentChange7d: 0.9,
      marketCap: 85000000,
      volume24h: 9000000,
      circulatingSupply: 170000000,
      maxSupply: 200000000,
      logo: 'https://cryptologos.cc/logos/binance-coin-bnb-logo.png',
      chartImage: 'https://www.svgrepo.com/show/354261/graph.svg',
    },
    {
      id: 5,
      name: '🪙 XRP',
      symbol: 'XRP',
      price: 0.9,
      percentChange1h: -0.3,
      percentChange24h: 0.2,
      percentChange7d: -1.1,
      marketCap: 50000000,
      volume24h: 7000000,
      circulatingSupply: 50000000,
      maxSupply: 100000000,
      logo: 'https://cryptologos.cc/logos/xrp-xrp-logo.png',
      chartImage: 'https://www.svgrepo.com/show/354261/graph.svg',
    },
    {
      id: 6,
      name: '🪙 Cardano',
      symbol: 'ADA',
      price: 1.2,
      percentChange1h: 0.7,
      percentChange24h: -0.9,
      percentChange7d: 2.3,
      marketCap: 45000000,
      volume24h: 6000000,
      circulatingSupply: 33000000,
      chartImage: 'https://www.tableau.com/sites/default/files/2021-09/Line%20Chart%201%20-%20Good%20-%20900x650.png',
    },
  ],
};

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    updateAsset: (state, action) => {
      const index = state.assets.findIndex((a) => a.id === action.payload.id);
      if (index !== -1) {
        state.assets[index] = { ...state.assets[index], ...action.payload };
      }
    },
  },
});

export const { updateAsset } = cryptoSlice.actions;
export default cryptoSlice.reducer;
