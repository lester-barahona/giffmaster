
import {API_KEY,API_URL} from './settings'

const fromApiResponseToGifs=apiResponse=>{
  const {data}=apiResponse
  const gifs=data.map(image=>{
                          const {images,title,id}=image
                          const {url}=images.downsized
                          return {title,id,url}
                      })
  return gifs;
}

export default function getGifs({keyword='random'}={}){

   const apiURL=`${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`;

   return fetch(apiURL)
    .then(resp=>resp.json())
      .then(fromApiResponseToGifs)
}