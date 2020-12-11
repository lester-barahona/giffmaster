
const apiKey='zm3FhFAu1XrQFRxTr7LqgsxAMJ2pvgVy';

export default function getGifs({keyword='random'}={}){

    const apiURL=`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`;

   return fetch(apiURL)
    .then(resp=>resp.json())
      .then(resp=>{
        const {data}=resp
        const gifs=data.map(image=>{
                                const {images,title,id}=image
                                 const {url}=images.downsized
                                //const {url}=images.preview_gif
                                return {title,id,url}
                            })
        return gifs;
      })
}