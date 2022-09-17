/*
Component: src/pages/Collections/Collections.js
*/

import React, { useEffect, useState } from 'react';
import './Collections.scss';
import {useNavigate, useParams, Link} from 'react-router-dom';
import Container from '../../components/container/Container';

const Collections = (props) => {
    const navigate = useNavigate();
    const [collections,setCollections] = useState([]);
    const [result, setResult] = useState([]);
    const {count, page} = useParams();
    const [countState, setCountState] = useState(count);
    const first = parseInt(count)*parseInt(page)-parseInt(count);
    const last = first + parseInt(count);
    const pages = parseInt(count) / parseInt(page);
    
    const collectionsFiltered = async (count, page) => {
        let collAll = JSON.parse(localStorage.getItem('collections'));
        let filtered = [];
        let lista = [];
        await fetch(`https://ftx.com/api/nft/collection_names?startInclusive=${first}&endExclusive=${last}`)
            .then(async(response)=>await response.json())
            .then(async (data)=>{filtered=data.result})
            .catch((error)=>console.log(error));
            setResult(filtered);
        if(filtered){
            filtered.collections.map((element)=>{
                lista.push("https://ftx.com/api/nft/example_nft?collection="+element)});
            filtered = [];
            }
        lista.map(async(element)=>{
            await fetch(element)
            .then(async(response)=>await response.json())
            .then((data)=>filtered.push(data.result))
            .catch((error)=>console.log(error));
        });
        if(Object.keys(collections).length===0)
            setCollections(filtered);
    }
    
    const changeCount = (e) => {
        setCountState(e.target.value);
        navigate("/collections/"+ e.target.value+"/1")
        window.location.reload();
    }
    useEffect(() => {
      if(Object.keys(collections).length===0){
        collectionsFiltered(count,page)
      }
        if(countState != count){
            collectionsFiltered(countState,page)
        }
    }, [collections, countState])
    
    return (
        <div className = "collections">
            <div className='tools'>
                <h2>
                    {first} - {last} of {result?result.total:"0"}
                </h2>
                <div>
                    <select value={count} onChange={changeCount}>
                        <option key="0" value="10">10 per page</option>
                        <option key="1" value="25">25 per page</option>
                        <option key="2" value="100">100 per page</option>
                    </select>
                </div>
                <ul>
                    <li>
                        <Link to={"/"+count+"/"+page-1}>0</Link>
                    </li>
                </ul>
            </div>
            {Object.keys(collections).length>0
                ?<Container collections={collections}/>
                :""}
        </div>
    )
}
export default Collections; 