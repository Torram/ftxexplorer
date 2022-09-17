/*
Component: src/pages/Nft/Nft.js
*/

import React, { useEffect, useState } from 'react';
import './Nft.scss';
import {Link, RouteComponentProps, useParams} from 'react-router-dom';

const Nft = (props) => {
    const {id} = useParams();
    const [nft,setNft] = useState({});
    const [bids, setBids] = useState([])

    const getNft = async() => {
        await fetch(`https://ftx.com/api/nft/nft/${id}`)
            .then(async (response) => response.json())
            .then((data) => setNft(data.result))
            .catch((error)=>(error))
    }

    const getBids = async() => {
        await fetch(`https://ftx.com/api/nft/all_bids?collection_type=all&limit=1000&nft_id=${id}`)
        .then(async (response) => await response.json())
        .then((data) => setBids(data.result))
        .catch((error)=>(error))
    }

    useEffect(() => {
        if(Object.keys(nft).length===0){
            getNft();
        }else if(Object.keys(bids).length===0)
            getBids(); 
        
    }, [nft])
    
    return (
        <div className = "Nft">
            <div className="header">
                <nav className='nav'>
                    <ol className='ol'>
                        <li>
                            <Link to="/collections">
                                Collections
                            </Link>
                        </li>
                        <li> {"<"} </li>
                        <li>
                            <Link to={"/collection/"+nft.collection}>
                                {nft?nft.collection:""}
                            </Link>
                        </li>
                        <li> {"<"} </li>
                        <li>{nft?nft.name:""}</li>
                    </ol>
                </nav>   
                <div className='title'>
                    <h1>
                        {typeof nft !== "undefined"?nft.name:"{NFT NAME}"}
                    </h1>
                </div> 
            </div>
            <div className='main' >
                <div className='left-element'>
                    <div className='nft-img'>
                        <img src={typeof nft !== "undefined"?nft.imageUrl:""} alt=""/>    
                    </div>
                    <div>
                        <h2 className=''>
                            NFT DETAILS
                        </h2>
                        <div className='nft-details'>
                            
                            <div>
                                <h3>
                                    <p>Nombre:</p>
                                </h3>
                                <p>
                                    {typeof nft !== "undefined"?nft.name:""}
                                </p>
                                <h3>
                                    <p>Collection:</p>
                                </h3>
                                <p>
                                    {typeof nft !== "undefined"?nft.collection:""}
                                </p>
                                <h3>
                                    <p>Redeemable:</p>
                                </h3>
                                <p>
                                    {typeof nft !== "undefined"?
                                    nft.redeemable?"YES":"NO":""}
                                </p>
                                <h3>
                                    <p>Has Owner:</p>
                                </h3>
                                <p>
                                    {typeof nft !== "undefined"?
                                    nft.hasOwner?"YES":"NO":""}
                                </p>
                            </div>
                            <div>
                                <h3>
                                    <p>Issuer:</p>
                                </h3>
                                <p>
                                    {typeof nft !== "undefined"?nft.issuer:""}
                                </p>
                                <h3>
                                    <p>Series:</p>
                                </h3>
                                <p>
                                    {typeof nft !== "undefined"?nft.series:""}
                                </p>
                            </div>
                        </div>   
                    </div>    
                </div>
                <div className='right-element'>
                    <div className='nft-description'>
                        <h3><p>Description:</p> </h3>
                        <p>
                            {typeof nft !== "undefined"?nft.description:""}
                        </p>
                    </div>
                    {Object.keys(nft).length>0?
                        <div className='nft-details'>
                            <h2><p>Attributes:</p></h2>
                                {nft.attributesList.map((row)=>{
                                    return <>
                                        <p>{row.trait_type}</p>
                                        <p>{row.value}</p>
                                    </>
                                })}
                        </div>
                    :<p/>}
                    <div className=''>
                        <h3> <p> Recent Activity</p> </h3>
                        <table className='table'>
                            <thead>
                                <th>Tipo</th>
                                <th>Precio</th>
                                <th>Hora</th>
                            </thead>
                            <tbody>
                                {Object.keys(bids).length>0?
                                    bids.map((row)=>{
                                        return (
                                            <tr>
                                                <td>Bid</td>
                                                <td>USD {row.price}</td>
                                                <td>{row.time.slice(0,19).replace("T",", ")}</td>
                                            </tr>
                                        )
                                    }):<tr><td/></tr>}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
export default Nft; 