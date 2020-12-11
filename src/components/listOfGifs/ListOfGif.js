import React,{useEffect,useState} from 'react'
import './index.css'
import Gif from '../gif/Gif';


const ListOfGif = ({gifs}) => {

    return <div className="listOfGifs"> 
              {
                gifs.map(({id,title,url})=>{
                        return <Gif 
                                    key={id} 
                                    id={id}
                                    title={title} 
                                    url={url} 
                                    
                                />
                        })
                }
            </div>           
           
}

export default ListOfGif
