import {useState,useEffect,useContext} from 'react'
import getGifs from './../services/getGifs';
import Context  from './../context/GifsContext';


export const useGifs = ({keyword}={keyword:null}) => {

    const {gifs,setGifs} = useContext(Context)
    const [loading,setLoading]=useState(false)
    
    useEffect(()=>{
      setLoading(true);
        const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'
        getGifs({keyword:keywordToUse}).then(gifs=>{
          setGifs(gifs)
          setLoading(false);
          localStorage.setItem('lastKeyword',keywordToUse) //saving the keyword
        })
      },[keyword,setGifs])


    return [loading,gifs]
}

 
