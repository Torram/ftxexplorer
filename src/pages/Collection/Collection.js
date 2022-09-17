/*
Component: src/pages/Collection/Collection.js
*/

import React, { useEffect, useState } from 'react';
import './Collection.scss';
import { useParams} from 'react-router-dom';
import Container from '../../components/container/Container';

const Collection = (props) => {
    const {name} = useParams();
    const [collection, setCollection] = useState([]);

    const getCollection = async() => {
        const params = {
            collection: name,
            nftAutionFilter: "all",
            minPriceFilter: null,
            maxPriceFilter: null,
            seriesFilter: [],
            traitsFilter: {},
            searchStringFilter: null,
            mintSourceFilter: null,
            include_not_for_sale: true
        }
        await fetch(`https://ftx.com/api/nft/nfts_filtered?startInclusive=0&endExclusive=25&nft_filter_string=${JSON.stringify(params)}&sortFunc=offer_asc`)
        .then(async (response)=> await response.json())
        .then((data)=>setCollection(data.result))
        .catch((error)=>console.log(error));
    }
    
    useEffect(() => {
        if(Object.keys(collection).length===0)
            getCollection();
    }, [collection])
    
        return (
        <div className = "Collection">
            <div>
                <h2>
                    NFT's IN COLLECTION: {Object.keys(collection).length>0?collection.total:0}
                </h2>
            </div>

            <div>
            {Object.keys(collection).length>0
                ?<Container nfts={collection.nfts}/>
                :""}
            </div>
        </div>
    )
}
export default Collection; 