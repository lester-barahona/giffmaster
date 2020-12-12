import {API_KEY,API_URL} from './settings'

const fromApiResponse=apiResponse=>{
  const {data}=apiResponse
  return data;
}

export default function getTrendingTerms(){

   const apiURL=`${API_URL}/trending/searches?api_key=${API_KEY}&limit=10`;

   return fetch(apiURL)
    .then(resp=>resp.json())
      .then(fromApiResponse)
}