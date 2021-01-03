import {useState,useEffect,useContext} from 'react'
import getGifs from 'services/getGifs';
import Context  from 'context/GifsContext';

const INITIAL_PAGE=0

export const useGifs = ({keyword,limit}={keyword:null}) => {

    const {gifs,setGifs} = useContext(Context)
    const [page, setPage] = useState(INITIAL_PAGE)
    
    const [loading,setLoading]=useState(false)
    const [loadingNextPage,setLoadingNextPage]=useState(false)
    
    const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'

    useEffect(()=>{
        setLoading(true);
        getGifs({keyword:keywordToUse,limit}).then(gifs=>{
          setGifs(gifs)
          setLoading(false);
          localStorage.setItem('lastKeyword',keywordToUse) //saving the keyword
        })
      },[keywordToUse,setGifs,limit])


      useEffect(() => {
        if(page===INITIAL_PAGE) return
        setLoadingNextPage(true);
        getGifs({keyword:keywordToUse,page,limit}).then(gifs=>{
          setGifs(prevGifs=>prevGifs.concat(gifs))
          setLoadingNextPage(false);
        })

      }, [page,keywordToUse,setGifs,limit])


    return {loading,loadingNextPage,gifs,setPage}
}

 
