import React, { useEffect, useState } from "react";
import SelectCoins from "../components/ComparePage/SelectCoins";
import SelectDays from "../components/CoinPage/SelectDays";
import { getCoinData } from "../functions/getCoinData";
import CoinInfo from "../components/CoinPage/CoinInfo";
import { settingCoinObject } from "../functions/convertObject";
import { getCoinPrices } from "../functions/getCoinPrices";
import { settingChartData } from "../functions/settingChartData";
// import LineChart from "../components/CoinPage/LineChart";
import LineChartCompare from "../components/ComparePage/LineChartCompare"

const ComparePage = () => {
  const [crypto1, setCrypto1] = useState("bitcoin");
  const [crypto2, setCrypto2] = useState("ethereum");
  const [days, setDays] = useState(30);
  const [crypto1Data, setCrypto1Data] = useState(null);
  const [crypto2Data, setCrypto2Data] = useState(null);
  const [chartData,setChartData]=useState({
    labels: [],
    datasets:[]
  });

  // Fetch data for selected cryptocurrencies
  const getData = async () => {
    try {
      const coin1data = await getCoinData(crypto1);
      const coin2data = await getCoinData(crypto2);

      if (coin1data) settingCoinObject(coin1data, setCrypto1Data);
      if (coin2data) settingCoinObject(coin2data, setCrypto2Data);
      if (coin1data && coin2data) {
        const prices1 = await getCoinPrices(crypto1, days);
        const prices2 = await getCoinPrices(crypto2, days);
        settingChartData(setChartData, prices1, prices2);
      }
    } catch (error) {
      console.error("Error fetching coin data:", error);
    }
  };

  // Fetch data whenever crypto1, crypto2, or days change
  useEffect(() => {
    getData();
  }, [crypto1, crypto2, days]);

  return (
    <div>
      {/* Dropdowns for selecting coins and days */}
      <div className="flex sm:flex-row flex-col">
        <div className="flex sm:flex-row flex-col sm:gap-1 items-center">
        <SelectCoins
          crypto={crypto1}
          handleCryptoChange={(e) => setCrypto1(e.target.value)}
          cryptoNo={'Crypto 1'}
        />
        <div className="sm:ml-[-50px]">
        <SelectCoins
          crypto={crypto2}
          handleCryptoChange={(e) => setCrypto2(e.target.value)}
          cryptoNo={'Crypto 2'}
        />
        </div>
        </div>
        <div className="flex items-center justify-center">
        <SelectDays days={days} handleDaysChange={(e) => setDays(e.target.value)} />
      </div>
      </div> 
      <div>
        <LineChartCompare chartData={chartData} multiaxis={true} />
      </div>
      {/* Display coin data */}
      <div>
        {crypto1Data ? (
          <CoinInfo heading={crypto1Data.name} desc={crypto1Data.desc} />
        ) : (
          <p className="w-[93%]">Loading data for {crypto1}...</p>
        )}
        {crypto2Data ? (
          <CoinInfo heading={crypto2Data.name} desc={crypto2Data.desc} />
        ) : (
          <p className="w-[93%]">Loading data for {crypto2}...</p>
        )}
      </div>
    </div>
  );
};

export default ComparePage;
