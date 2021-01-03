import React,{useState} from 'react'
import './Home.css'
import { useGifs } from 'hooks/useGifs';
import ListOfGif from 'components/listOfGifs/ListOfGif';
import Spinner from 'components/spinner/Spinner';
import TrendingSearches from 'components/trendingSearches/TrendingSearchesLazy';

const Home = ({history}) => {

    const [keyword,setKeyword]=useState('')

    const {loading,gifs} = useGifs({limit:16})

    const handleChange=e=>setKeyword(e.target.value)

    const handleSubmit=e=>{
        e.preventDefault()
        history.push(`/search/${keyword}`)
    }

    return (
        <>
            
            <form className="search-form" onSubmit={handleSubmit}>
                
                <input className="search-input" placeholder="Search a Gif here..." 
                        type="text" value={keyword} 
                        onChange={handleChange}/>

                <button className="search-button" type="submit"><span className="material-icons">search</span></button>
            </form>

            <div className="app-main">
                <div className="app-results">
                    <h3 className="app-title">Última búsqueda</h3>
                    { loading?  <Spinner/>  :  <ListOfGif gifs={gifs}/> }
                </div>
                <div className="app-categories-container">
                    <TrendingSearches/>
                </div> 
           </div>
        </>
    )
}

export default Home
