import React,{Suspense} from 'react'
import { useNearScreen } from 'hooks/useNearScreen';
import Spinner from './../spinner/Spinner';

const TrendingSearches=React.lazy(()=>import('./TrendingSearches')) //lazy async import

export default function TrendingSearchesLazy(){
   
    const [show, elOb] = useNearScreen() //custom hook to lazy

    //using suspense for asynchronous import fallback
    return <div ref={elOb}>
                <Suspense fallback={<Spinner/>}> 
                    {show ? <TrendingSearches/> : <Spinner/> }
                </Suspense>
           </div>
}
