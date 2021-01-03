import React from 'react'
import './index.css'
import Gif from '../gif/Gif';


const ListOfGif = ({gifs}) => {

    return <div className="listOfGifs"> 
              {
                gifs.map(({id,title,url},index)=>{
                        return <Gif 
                                    key={`${index}-${id}`} 
                                    id={id}
                                    title={title} 
                                    url={url} 
                                    
                                />
                        })
                }
            </div>           
           
}

export default ListOfGif
