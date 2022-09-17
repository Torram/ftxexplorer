/*
Component: src/component/Header/Header.js
*/

import React, { useState, useEffect } from "react";
import "./Header.scss";
import { Link, useNavigate } from "react-router-dom";

const Header = (props) => {
  let col = {};
  const navigate = useNavigate();
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

  const collectionSearch = (e) =>{
    if(e.key=='Enter')
      if(collections.find((element=>e.target.value===element.collection)))
        navigate(`/collections/${e.target.value}`)
      else
        alert("Cannot find collection")
  }
  
  useEffect(() => {
    col = localStorage.getItem('collections');
    if(col===null){
        const coll = collectionsAll();
        setCollections(coll);
    }
    else if(col!==null&&Object.keys(collections).length===0){
        //localStorage.clear()
        setCollections(JSON.parse(col))

    }
  }, [collections]);

  return (
    <div className='navbar'>
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <Link to="/"> 
            <h1>FTXEXPLORER</h1>
          </Link>
        </div>
        <div className="navbar-links_container">
          <input type="text" list="collections" placeholder='Search Collection Here' onKeyDown={collectionSearch}/>
          <datalist id="collections">
            {Object.keys(collections).length>0?collections.map((element,index) => {
                  return(
                    <option key={index} value={element.collection}>
                        {element.collection}
                    </option>
                  )
              }):<p/>}
          </datalist>
          <Link to="/collections"><p>Explore</p> </Link>
        </div>
      </div>
    </div>
  )
  
};
export default Header;
