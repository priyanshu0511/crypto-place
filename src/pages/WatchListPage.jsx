import React, { useEffect, useState, useMemo } from "react";
import Button from "../components/Common/Button";
import TabsComponent from "../components/Dashboard/TabComponent";
import { get100Coins } from "../functions/get100Coins";

const Watchlist = () => {
  const watchlist = useMemo(() => {
    return JSON.parse(localStorage.getItem("watchlist")) || [];
  }, []);

  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const allCoins = await get100Coins();
        if (allCoins) {
          setCoins(allCoins.filter((coin) => watchlist.includes(coin.id)));
        }
      } catch (error) {
        console.error("Error fetching coins:", error);
      }
    };

    if (watchlist.length > 0) {
      getData();
    }
  }, [watchlist]); // Now stable and won't change unless watchlist changes

  return (
    <div>
      {watchlist.length > 0 ? (
        <TabsComponent coins={coins} />
      ) : (
        <div>
          <h1 style={{ textAlign: "center" }}>
            Sorry, No Items In The Watchlist.
          </h1>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "2rem",
            }}
          >
            <a href="/dashboard">
              <Button text="Dashboard" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Watchlist;
