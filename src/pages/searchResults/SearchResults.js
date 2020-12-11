import React from 'react'
import ListOfGif from './../../components/listOfGifs/ListOfGif';
import Spinner from './../../components/spinner/Spinner';
import { useGifs } from './../../hooks/useGifs';


const SearchResults = ({match:{params}}) => {

    const {keyword}=params
    const [loading,gifs] = useGifs({keyword})

    return (
        <>
            {
                loading? <Spinner/> : <ListOfGif gifs={gifs}/>
            }
        </>
    )
}

export default SearchResults
