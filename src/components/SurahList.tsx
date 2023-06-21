import { useEffect,useState } from "react";
import { SurahItem } from "./SurahItem";


export const SurahList =()=>{
    const [data,setData] = useState([]);
    useEffect(()=>{
        const getData = async () =>{
            try{
                const response = await fetch(' https://equran.id/api/v2/surat')
                const responseJson = await response.json()
                setData(responseJson.data)
            }
            catch(error){
                console.log("Data failed to fetch")
            }
        }
        getData()
        console.log(data)
    },[])

    return(
        <>
            <div className="list flex flex-wrap max-w-6xl mx-auto justify-center items-center">
                {data.map((item,index)=>(
                       <SurahItem key={index} data={item}/>
                ))}
            </div>
        </>
    )
}