
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../components/Common/Loader';
import { settingCoinObject } from '../functions/convertObject';
import { FaArrowTrendDown, FaArrowTrendUp } from 'react-icons/fa6'
import Tooltip from '@mui/material/Tooltip';
import CoinInfo from '../components/CoinPage/CoinInfo';
import { getCoinData } from '../functions/getCoinData';
import { getCoinPrices } from '../functions/getCoinPrices';
import LineChart from '../components/CoinPage/LineChart';
import { convertDate } from '../functions/convertDate';
import SelectDays from '../components/CoinPage/SelectDays';



const CoinPage = () => {

  const { id } = useParams();
  const [coinData, setCoinData] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [chartData, setChartData] = useState({});
  const [days, setDays] = React.useState(30);

  const handleDaysChange = (event) => {
    setDays(event.target.value);
  };

  // console.log(id);
  useEffect(() => {
    const getData = async () => {
      try {
        const coinResponse = await getCoinData(id);
        if (coinResponse) {
          settingCoinObject(coinResponse, setCoinData);
          const coinPrices = await getCoinPrices(id, days);
          if (coinPrices) {
            console.log(coinPrices); // Check the fetched prices
            setChartData({
              type: 'line',
              data: {
                labels: coinPrices.map(item => convertDate(item[0])), // X-axis labels
                datasets: [
                  {
                    label: 'Price',
                    data: coinPrices.map(item => item[1]), // Price data
                    borderColor: '#3a80e9',
                    fill: true,
                    borderWidth: 1,
                    tension: 0.25,
                    backgroundColor: 'rgba(58,128,233,0.1)',
                    pointRadius: 0
                  },
                ],
              },
              options: {
                responsive: true,
                plugins: {
                  legend: {
                    position: 'top',
                  },
                  title: {
                    display: true,
                    text: 'Price Over Time',
                  },
                },
              },
            });
          }
        }
      } catch (error) {
        console.error('Error fetching coin data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      setIsLoading(true);
      getData(); // Fetch data whenever id or days change
    }
  }, [id, days]); // No need to add getData to the dependency array since it's defined inside the effect



  return (
    <div className='bg-black'>
      {isLoading ? <Loader /> : <>
        <table className='w-[93%] block ml-auto mr-auto '>
          <tr className={`flex justify-between items-center rounded-2xl pr-6 gap-2 border-2 border-darkgray mb-2 mt-2 bg-darkgray`}>
            <td className='flex justify-start items-center gap-4 min-[330px]:px-5 min-[330px]:py-5 px-1 py-1 text-left md:w-1/6 w-3/12'>
              <Tooltip title="Image">
                <img src={coinData.image} alt="CoinImage" className='md:h-14 md:w-14 sm:h-8 sm:w-8 w-4 h-4' />
              </Tooltip>
            </td>
            <td className=' text-left md:w-1/6 w-3/12'>
              <div className='flex flex-col gap-2'>
                <Tooltip title="Symbol"><p className='text-white uppercase font-semibold md:text-xl sm:text-base text-xs m-0'>{coinData.symbol}</p></Tooltip>
                <Tooltip title="Name"><p className='text-gray capitalize font-medium md:text-base sm:text-xs text-[0.5rem] m-0'>{coinData.name}</p></Tooltip>
              </div>
            </td>
            <td className='flex justify-start items-center gap-4 mx-6 my-4 text-left md:w-1/6 w-3/12'>
              <Tooltip title="% Change"><div
                className={`border-2 rounded-3xl md:px-6 md:py-2 px-3 py-1 md:text-base sm:text-xs text-[0.5rem] text-center font-semibold ${coinData.price_change_percentage_24h >= 0 ? 'text-green border-green hover:bg-green hover:text-white transition-all duration-300' : 'text-red border-red hover:bg-red hover:text-white transition-all duration-300'} `}>
                {coinData.price_change_percentage_24h.toFixed(2)}%
              </div>
              </Tooltip>
              <Tooltip title="Trend"><div className={`border-2 rounded-full md:px-3 md:py-3 px-1 py-1 md:text-base sm:text-xs text-[0.5rem] text-center font-semibold ${coinData.price_change_percentage_24h >= 0 ? 'text-green border-green hover:bg-green hover:text-white transition-all duration-300' : 'text-red border-red hover:bg-red hover:text-white transition-all duration-300'} `}>
                {coinData.price_change_percentage_24h >= 0 ? <FaArrowTrendUp /> : <FaArrowTrendDown />}
              </div></Tooltip>
            </td>
            <td className={`md:m-6 md:text-base sm:text-xs text-[0.5rem] font-semibold text-left md:w-1/6 w-3/12 ${coinData.price_change_percentage_24h >= 0 ? 'text-green' : 'text-red'}`}>
              <Tooltip title="Current Price">${coinData.current_price.toFixed(2).toLocaleString()}</Tooltip>
            </td>
            <Tooltip title="Total Volume"><td className='hidden lg:inline text-left w-1/6 text-gray text-base'><p>${coinData.total_volume.toLocaleString()}</p></td></Tooltip>
            <Tooltip title="Market Cap"><td className='hidden lg:inline text-left w-1/6 text-gray text-base'><p>${coinData.market_cap.toLocaleString()}</p></td>       </Tooltip>
          </tr>
        </table>
        <div className='w-[93%] block ml-auto mr-auto'>
          <SelectDays days={days} handleDaysChange={handleDaysChange}/>
          <LineChart chartData={chartData} />
        </div>
        <CoinInfo heading={coinData.name} desc={coinData.desc} />
      </>}
    </div>
  )
}

export default CoinPage