import { useState,useEffect } from "react";
import { AyatItem } from "./AyatItem";
import { useParams } from "react-router-dom";

export const SurahAyat = () =>{
    const { id } = useParams<{ id: string }>();
    const [data,setData] = useState([])
    useEffect(()=>{
        const getData = async () =>{
            try{
                const response = await fetch(`https://equran.id/api/v2/surat/${id}`)
                const responseJson = await response.json()

                setData(responseJson.data)
            }
            catch(error){
                console.log('failed fetch')
            }
        }
        getData()
    },[])
    console.log("surah",data)
    return(
        <>
        <div>
            <AyatItem data={data}/>
        </div>
        </>
    )
}