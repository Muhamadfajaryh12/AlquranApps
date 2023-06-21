
import {MdMosque} from 'react-icons/md'
interface Ayat{
    data:any
}

export const AyatItem:React.FC<Ayat> = ({data}) =>{
    
    return(
        <>
        <div className="border-2 flex justify-around flex-wrap p-1 bg-teal-700">
        <div className="mt-20 w-auto 2xl:w-96 bg-white rounded-xl mx-2 p-2 h-full">
            <h1 className="font-bold text-2xl">{data.namaLatin} ({data.nama})</h1>
            <p className="text-sm">{data.jumlahAyat} Ayat</p>
            <p className="text-sm">Nomor Surah {data.nomor}</p>
            <p className="my-10 text-justify">{data.deskripsi}</p>
        </div>
        <div className='overflow-auto h-screen'>
            {data.ayat? 
            data.ayat.map((item:any,index:number)=>(
                <div key={index} className="flex max-w-6xl mx-auto m-5 justify-between items-center p-2">
                    <div className="text-left text-white font-bold p-3 mx-5 flex items-center"><h1 className='text-xl mx-1'>{item.nomorAyat}</h1> <MdMosque size={30}/></div>
                    <div className="text-right  w-11/12 text-white border-white border-b-2" >
                        <p className="my-2 text-2xl">{item.teksArab}</p>
                        <p className="my-2 text-md">{item.teksLatin}</p>
                        <p className="text-left text-md my-2">{item.teksIndonesia}</p>
                    </div>

                </div>
            ))
             : "false"}
        </div>
        </div>
        </>
    )
}