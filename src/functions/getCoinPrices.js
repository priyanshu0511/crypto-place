import axios from 'axios';

export const getCoinPrices=(id,days)=>{
    const prices=axios
          .get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}`)
          .then(res=>{
            // console.log(res.data.prices)
            return res.data.prices
          })
          .catch(err => {
            console.log(err);
          })
          return prices
}