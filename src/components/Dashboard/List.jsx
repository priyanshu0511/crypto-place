import { React, useState } from 'react'
import { FaArrowTrendDown, FaArrowTrendUp, FaStar } from 'react-icons/fa6'
import Tooltip from '@mui/material/Tooltip';
import { Link } from 'react-router-dom';
import { CiStar } from "react-icons/ci";
import { removeItemFromWatchlist } from "../../functions/removeItemFromWatchlist";
import { saveItemToWatchlist } from "../../functions/saveItemToWatchlist";

const List = ({ coin }) => {

    const watchlist = JSON.parse(localStorage.getItem('watchlist'));
    const [isCoinAdded, setIsCoinAdded] = useState(watchlist?.includes(coin.id));

    // Determine color based on price change
    const borderColor = coin.price_change_percentage_24h >= 0 ? "green" : "red";

    return (
        <Link to={`coin/${coin.id}`}>
            <tr className={`flex justify-between items-center gap-1 border-2 border-darkgray mb-2 mt-2 ${coin.price_change_percentage_24h >= 0 ? 'hover:border-green' : 'hover:border-red'} hover:scale-105 transition-all duration-300`}>
                <td className='flex justify-start items-center gap-4 min-[330px]:px-5 min-[330px]:py-5 px-1 py-1 text-left md:w-[15%] w-3/12'>
                    <Tooltip title="Image">
                        <img src={coin.image} alt="Coin" className='md:h-14 md:w-14 sm:h-8 sm:w-8 w-4 h-4' />
                    </Tooltip>
                </td>
                <td className=' text-left md:w-[15%] w-3/12'>
                    <div className='flex flex-col gap-2'>
                        <Tooltip title="Symbol"><p className='text-white uppercase font-semibold md:text-xl sm:text-base text-xs m-0'>{coin.symbol}</p></Tooltip>
                        <Tooltip title="Name"><p className='text-gray capitalize font-medium md:text-base sm:text-xs text-[0.5rem] m-0'>{coin.name}</p></Tooltip>
                    </div>
                </td>
                <td className='flex justify-start items-center gap-4 mx-6 my-4 text-left md:w-[15%] w-3/12'>
                    <Tooltip title="% Change"><div
                        className={`border-2 rounded-3xl md:px-6 md:py-2 px-3 py-1 md:text-base sm:text-xs text-[0.5rem] text-center font-semibold ${coin.price_change_percentage_24h >= 0 ? 'text-green border-green hover:bg-green hover:text-white transition-all duration-300' : 'text-red border-red hover:bg-red hover:text-white transition-all duration-300'} `}>
                        {coin.price_change_percentage_24h.toFixed(2)}%
                    </div>
                    </Tooltip>
                    <Tooltip title="Trend"><div className={`border-2 rounded-full md:px-3 md:py-3 px-1 py-1 md:text-base sm:text-xs text-[0.5rem] text-center font-semibold ${coin.price_change_percentage_24h >= 0 ? 'text-green border-green hover:bg-green hover:text-white transition-all duration-300' : 'text-red border-red hover:bg-red hover:text-white transition-all duration-300'} `}>
                        {coin.price_change_percentage_24h >= 0 ? <FaArrowTrendUp /> : <FaArrowTrendDown />}
                    </div></Tooltip>
                </td>
                <td className={`md:m-6 md:text-base sm:text-xs text-[0.5rem] font-semibold text-left md:w-[15%] w-3/12 ${coin.price_change_percentage_24h >= 0 ? 'text-green' : 'text-red'}`}>
                    <Tooltip title="Current Price">${coin.current_price.toFixed(2).toLocaleString()}</Tooltip>
                </td>
                <Tooltip title="Total Volume"><td className='hidden lg:inline text-left w-[15%] text-gray text-base'><p>${coin.total_volume.toLocaleString()}</p></td></Tooltip>
                <Tooltip title="Market Cap"><td className='hidden lg:inline text-left w-[15%] text-gray text-base'><p>${coin.market_cap.toLocaleString()}</p></td>       </Tooltip>
                <td
                    className={`${borderColor === "green" ? "text-green" : "text-red"
                        } cursor-pointer`}
                    onClick={(e) => {
                        if (isCoinAdded) {
                            removeItemFromWatchlist(e, coin.id, setIsCoinAdded)
                        } else {
                            setIsCoinAdded(true);
                            saveItemToWatchlist(e, coin.id);
                        }
                    }}
                >
                    {isCoinAdded ? <FaStar size={30} /> : <CiStar size={30} />}
                </td>
            </tr>
        </Link>
    )
}

export default List