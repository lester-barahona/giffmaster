import React,{useRef,useEffect,useCallback} from 'react'
import ListOfGif from 'components/listOfGifs/ListOfGif';
import Spinner from 'components/spinner/Spinner';
import { useGifs } from 'hooks/useGifs';
import { useNearScreen } from 'hooks/useNearScreen';

//libs
import debounce from 'just-debounce-it';

const SearchResults = ({match:{params}}) => {

    const {keyword}=params
    const {loading,gifs,setPage} = useGifs({keyword,limit:8})
    const externalRef=useRef()
    const [show,]=useNearScreen({distance:'300px',externalRef: loading?null:externalRef,once:false})

    const handleOnNextPage=useCallback(()=>debounce(
        ()=>setPage(prevPag=>prevPag+1),200)()
    ,[setPage])

    useEffect(() => {
        if(show) handleOnNextPage()  
    },[show,handleOnNextPage])


    return (
        <>
             <h3 className="app-title my-1">Búsqueda: {keyword}</h3>
            {
                loading? 
                        <Spinner/> :   
                        <> 
                            <ListOfGif gifs={gifs}/> 
                            <div ref={externalRef}></div>
                        </>
                
            }
            
            {/* <button onClick={handleOnNextPage}>Get Next Page</button> */}
        </>
    )
}

export default SearchResults
