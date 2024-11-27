import { React, useState } from "react";
import { FaArrowTrendUp, FaArrowTrendDown, FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { CiStar } from "react-icons/ci";
import { removeItemFromWatchlist } from "../../functions/removeItemFromWatchlist";
import { saveItemToWatchlist } from "../../functions/saveItemToWatchlist";

const Grid = ({ coin }) => {

  const watchlist=JSON.parse(localStorage.getItem('watchlist'));
  const [isCoinAdded, setIsCoinAdded] = useState(watchlist?.includes(coin.id));

  // Determine color based on price change
  const borderColor = coin.price_change_percentage_24h >= 0 ? "green" : "red";

  return (
    <Link to={`coin/${coin.id}`}>
      <div
        className={`bg-darkgray sm:w-[300px] sm:h-[300px] rounded-md border-2 border-darkgray hover:border-${borderColor} hover:scale-105 transition-all duration-300`}
      >
        <div className="flex justify-between items-center gap-4 px-5 py-5">
          <div className="flex gap-4 items-center">
            <img src={coin.image} alt="Coin" className="h-14 w-14" />
            <div className="flex flex-col gap-2">
              <p className="text-white uppercase font-semibold text-xl m-0">
                {coin.symbol}
              </p>
              <p className="text-gray capitalize font-medium text-base m-0">
                {coin.name}
              </p>
            </div>
          </div>
          <div
            className={`${
              borderColor === "green" ? "text-green" : "text-red"
            } cursor-pointer`}
            onClick={(e) => {
              if(isCoinAdded){
                removeItemFromWatchlist(e,coin.id,setIsCoinAdded)
              }else{
                setIsCoinAdded(true);
                saveItemToWatchlist(e,coin.id);
              }
            }}
          >
            {isCoinAdded ? <FaStar size={30} /> : <CiStar size={30} />}
          </div>
        </div>
        <div className="flex justify-start items-center gap-4 mx-6 my-4">
          <div
            className={`border-2 rounded-3xl px-6 py-2 text-base text-center font-semibold text-${borderColor} border-${borderColor} hover:bg-${borderColor} hover:text-white transition-all duration-300`}
          >
            {coin.price_change_percentage_24h.toFixed(2)}%
          </div>
          <div
            className={`border-2 rounded-full px-3 py-3 text-base text-center font-semibold text-${borderColor} border-${borderColor} hover:bg-${borderColor} hover:text-white transition-all duration-300`}
          >
            {coin.price_change_percentage_24h >= 0 ? (
              <FaArrowTrendUp />
            ) : (
              <FaArrowTrendDown />
            )}
          </div>
        </div>
        <div
          className={`m-6 sm:text-xl text-base font-semibold text-${borderColor}`}
        >
          ${coin.current_price.toFixed(2).toLocaleString()}
        </div>
        <div className="m-6 sm:text-sm text-xs text-gray flex flex-col gap-2">
          <p>Total Volume: ${coin.total_volume.toLocaleString()}</p>
          <p>Market Cap: ${coin.market_cap.toLocaleString()}</p>
        </div>
      </div>
    </Link>
  );
};

export default Grid;
