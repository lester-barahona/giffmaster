import React,{useContext} from 'react'
import Context from '../../context/GifsContext'
import Gif from './../../components/gif/Gif';


const Detail = ({match:{params}}) => {

    const {gifs}=useContext(Context)
    const {id}=params

    const gif=gifs.find(sGif=>sGif.id===id)

  
    return (
        <Gif 
            {...gif} 
            
        />
    )
}

export default Detail
