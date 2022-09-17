/*
Component: src/pages/HomePage/HomePage.js
*/

import React, { useEffect, useState } from 'react';
import './HomePage.scss';
import Container from '../../components/container/Container';


const HomePage = (props) => {
    let col={};
    const [collections, setCollections] = useState({});
    
    const collectionsAll = async () => {
        let coll={};
        await fetch("https://ftx.com/api/nft/collections")
        .then(async(response)=> await response.json())
        .then((collections)=>{coll=collections
              localStorage.setItem('collections',JSON.stringify(collections.result))})
        .catch((error)=>console.log(error))
        if(coll.success){
          setCollections(coll.result)
          return coll.result;
        }
    }

    useEffect(() => {
        
        col = localStorage.getItem('collections');
        if(col===null){
            const coll = collectionsAll();
            setCollections(coll);
        }
        else{
            //localStorage.clear()
            setCollections(JSON.parse(col))
        }
      }, []);
      
    return (
        <div className='' width="100%">
            
        </div>
    )
}
export default HomePage; 