import { Link } from "react-router-dom";
interface SurahProps {
    data: any; // Adjust the type of data according to the expected data structure
  }
  
  export const SurahItem: React.FC<SurahProps> = ({ data }) => {
    console.log(data)
    return(
        <>
        <Link to={`/surah/${data.nomor}`}>
        <div className="w-80 flex items-center border-2 h-24 justify-between m-2 shadow-md hover:bg-gray-100">
            <div className="w-10 bg-gray-200 mx-auto">
                <p className="font-bold p-2">{data.nomor}</p>
            </div>
            <div className="p-2 text-left w-36 mx-auto">
                <h5 className="font-bold">{data.namaLatin}</h5>
                <p className="text-sm">{data.arti}</p>
            </div>
            <div className="p-2">
                <p className="text-xs font-semibold">{data.nama}</p>
                <p className="text-xs">{data.jumlahAyat} Ayat</p>
            </div>
        </div>
        </Link>
        </>
    )
  };