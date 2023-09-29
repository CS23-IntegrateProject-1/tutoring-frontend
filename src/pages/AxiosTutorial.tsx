import React, { useEffect, useState } from 'react';
import Axios from 'axios';

function AxiosTutorial(){
    const [data, setData] = useState([null]);
        async function fetchData(){
            try{
                const response = await Axios.get("/");
                setData(response.data);
            }catch(error){
                console.log(error);
            }
        }
        fetchData();
useEffect(() => {
 fetchData();
 }, []);
    return <div>{data? <h1>{data}</h1> : <h1>Loading...</h1> }</div>;
}
export default AxiosTutorial;