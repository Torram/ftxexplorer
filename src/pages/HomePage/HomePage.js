/*
Component: src/pages/HomePage/HomePage.js
*/

import React, { useEffect } from 'react';
import './HomePage.scss';
import {Link} from 'react-router-dom';
import Collection from '../../components/Collection/Collection';

const HomePage = (props) => {
    useEffect(() => {
        const collections = async () => {
          try{
              await fetch("https://ftx.com/api/nft/collections")
              .then((response)=> response.json())
              .then((collections)=> collections)
          }
          catch (error){
              console.log(error);
          }
        }
        const coll=collections();
        console.log(coll)
      }, [])
      
    return (
        <div className='' width="50%">
            <Collection imageURL="https://static.ftx.com/nfts/424117991083479195.jpg" collection="MEXICO"/>
        </div>
            
        
    )
}
export default HomePage; 