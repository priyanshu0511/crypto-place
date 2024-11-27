import { toast } from "react-toastify";

export const removeItemFromWatchlist = (e, id, setIsCoinAdded) => {
  e.preventDefault();

  if (window.confirm("Are you sure you want to remove this coin?")) {
    let watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];

    // Filter out the coin by ID
    const newList = watchlist.filter((coin) => coin !== id);

    localStorage.setItem("watchlist", JSON.stringify(newList));
    setIsCoinAdded(false);

    toast.success(`${id.charAt(0).toUpperCase() + id.slice(1)} has been removed!`);
  } else {
    toast.error(`${id.charAt(0).toUpperCase() + id.slice(1)} could not be removed!`);
    setIsCoinAdded(true);
  }
};
