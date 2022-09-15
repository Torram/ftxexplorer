/*
Component: src/pages/HomePage/HomePage.js
*/

import React, { useEffect, useState } from 'react';
import './HomePage.scss';
import {Link} from 'react-router-dom';
import Collection from '../../components/Collection/Collection';

const HomePage = (props) => {

    const [collections, setCollections] = useState({});
    console.log(Object.keys(collections).length)
    useEffect(() => {
        const collections = async () => {
              let coll;
              await fetch("https://ftx.com/api/nft/collections")
              .then(async (response)=> await response.json())
              .then((collections)=>coll=collections)
              .catch((error)=>console.log(error))
              console.log(coll.result);
              return coll;
        }
        const coll = collections();

        console.log(coll);
      }, [])
      
    return (
        <div className='' width="50%">
            <Collection imageURL="https://static.ftx.com/nfts/424117991083479195.jpg" collection="MEXICO"/>
        </div>
            
        
    )
}
export default HomePage; 