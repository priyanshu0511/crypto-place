import axios from 'axios';

export const get100Coins=()=>{
    const myCoins=axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd')
            .then(res => {
                // console.log(res);
                return res.data;
            })
            .catch(err => {
                console.log(err);
            })
            return myCoins
    
}