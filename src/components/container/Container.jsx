import React from 'react'
import './Container.css'
import Item from '../item/Item';

const Container = ({
  count,
  collection,
  title,
  issuer,
  total,
  nfts,
  collections
}=Container) => {
  
  let rows = [];

  if(typeof nfts !== "undefined"){
    nfts.forEach((row, index)=> {
      rows.push(<Item nft={row} key={index}/>)
    });
  }
  else if(typeof collections !== "undefined"){
    collections.forEach((row, index)=>{
      if(row!==null)
        rows.push(<Item collection = {row} key={index}/>)
    })
  }
  

  return (
    <div className='section__padding'>
      <div className="container">
        <div className="container-text">
          <h1>{typeof nfts !== "undefined"?nfts.collection:"COLLECTIONS"}</h1>
        </div>
        <div className="container-card">
            {Object.keys(rows).length>0?rows:""}      
        </div>
      </div>
    </div>
  )
}

export default Container
