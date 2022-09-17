import React from "react";
import "./Item.scss";
import { Link } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";

const Item = ({collection, nft}) =>{
  let data = {};
  let route = "";
  if(typeof collection !== "undefined"){
    data = collection;
    route = `/collection/${collection.collection}`
  }
  else if(typeof nft !== "undefined"){
    data = nft
    route = `/nft/${nft.id}`
  }
    
    return(
        <div className="card-column" >
            <div className="card">
              <div className="card-top">
                <div className="card-img">
                  <Link to={route}>
                    <img src={data.imageUrl} alt="" />
                  </Link>
                </div>
              <Link to={route}>
                <p className="card-title">{nft?data.name:data.collection}</p>
              </Link>
              </div>
              <div className="card-bottom">
                <p className="">Series: <span>{data.series}</span></p>
              </div>
            </div>
        </div>
    )
}

export default Item;
