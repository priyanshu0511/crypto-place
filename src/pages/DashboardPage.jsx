import React, { useEffect, useState } from 'react'
import TabComponent from '../components/Dashboard/TabComponent'
import Search from '../components/Dashboard/Search';
import Button from '../components/Common/Button';
import PaginationComponent from '../components/Dashboard/Pagination';
import Loader from '../components/Common/Loader';
import BackToTop from '../components/Common/BackToTop';
import { get100Coins } from '../functions/get100Coins';


const DashboardPage = () => {

    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('');
    const [paginatedCoins, setPaginatedCoins] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const [page, setPage] = useState(1);
    const handlePageChange = (event, value) => {
        setPage(value);
        var previousIndex = (value - 1) * 12;
        setPaginatedCoins(coins.slice(previousIndex, previousIndex + 12));
    };


    useEffect(() => {
        // fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd')
        //     .then(res=>res.json())
        //     .then(data=>{
        //         console.log(data);
        //     })
        getData();
    }, [])

    const getData = async () => {
        const myCoins = await get100Coins();
        if (myCoins) {
            setCoins(myCoins);
            setPaginatedCoins(myCoins.slice(0, 12));
            setIsLoading(false);
        }
    }

    const onSearchChange = (e) => {
        setSearch(e.target.value)
    }

    var filteredCoins = coins.filter((item) => (item.name.toLowerCase().includes(search.toLowerCase()) || item.symbol.toLowerCase().includes(search.toLowerCase())))

    return (
        <>
            <BackToTop />
            {isLoading ? <Loader /> : <div>
                <Search search={search} onSearchChange={onSearchChange} />
                {search.length !== 0 ? <TabComponent coins={filteredCoins} /> : filteredCoins.length > 0 ? <TabComponent coins={paginatedCoins} /> :
                    <div className='w-1/4 mt-4 ml-auto mr-auto flex flex-col justify-center items-center gap-4'>
                        <p className='md:text-xl text-base'>No results found.</p>
                        <div className='text-xs p-0 md:text-base' onClick={() => { setSearch('') }}><Button text={"Clear Search"} /></div>
                    </div>
                }
                {search.length === 0 && <PaginationComponent page={page} handlePageChange={handlePageChange} />}
            </div>}
        </>
    )
}

export default DashboardPage