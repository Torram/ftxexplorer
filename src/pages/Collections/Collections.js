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
    const [currentPage, setCurrentPage] = useState(page);
    const first = parseInt(count)*parseInt(page)-parseInt(count);
    const last = first + parseInt(count);
    const [pagination, setPagination] = useState([]);

    const collectionsFiltered = async () => {
        let filtered = [];
        let list = [];
        await fetch(`https://ftx.com/api/nft/collection_names?startInclusive=${first}&endExclusive=${last}`)
            .then(async(response)=>await response.json())
            .then(async (data)=>{filtered=data.result})
            .catch((error)=>console.log(error));
            setResult(filtered);
            pages(filtered.total)
        if(filtered){
            filtered.collections.map((element)=>{
                list.push("https://ftx.com/api/nft/example_nft?collection="+element)});
            filtered = [];
            }
        list.map(async(element)=>{
            await fetch(element)
            .then(async(response)=>await response.json())
            .then((data)=>filtered.push(data.result))
            .catch((error)=>console.log(error));
        });
        if(Object.keys(collections).length===0)
            setCollections(filtered);
        
    }
    
    const pages = (total) =>{
        const pages = Math.ceil(total/count);
        let list=[];
        const pag = parseInt(page);

        if(pag<=5){
            console.log("ASD",pag+5)
            for(let i=1;i<=(pag+5);i++){
                list.push(i)
            }
            list.push(pages);
        }
        else if(pag>5&&pag<pages-5){
            list.push("1");
            for(let i=pag-5;i<pag+5;i++){
                list.push(i)
            }
            list.push(pages);
        }
        else if(pag>=pages-5){
            list.push("1");
            for(let i=pag-5;i<=pages;i++){
                list.push(i.toString());
            }
        }
        setPagination(list);
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
        if(currentPage !== page){
            window.location.reload();
        }
    }, [collections, countState, page])
    
    return (
        <div className = "collections">
            <div className='tools'>
                <h2>
                    {first?first:1} - {last} of {result?result.total:"0"}
                </h2>
                <div>
                    <select value={count} onChange={changeCount}>
                        <option key="0" value="10">10 per page</option>
                        <option key="1" value="25">25 per page</option>
                        <option key="2" value="100">100 per page</option>
                    </select>
                </div>
                <ul className='ul'>
                    <li>
                        <Link to={"/collections/"+count+"/"+(parseInt(page)-1)} key={Math.random()}>{"<<"}</Link>
                    </li>
                    {pagination.length>0?pagination.map((row,index)=>{
                        
                        return (
                        <li key={index}>
                            <Link to={"/collections/"+count+"/"+row}>{row}</Link>
                        </li>)
                    }):""}
                    <li>
                        <Link to={"/collections/"+count+"/"+(parseInt(page)+1)} key={Math.random()}>{">>"}</Link>
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