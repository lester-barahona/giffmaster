import React,{useState} from 'react'
import './index.css'
import { Link } from 'react-router-dom';
import { useGifs } from '../../hooks/useGifs';
import ListOfGif from '../../components/listOfGifs/ListOfGif';
import Spinner from './../../components/spinner/Spinner';


const POPULAR_GIFS=['rick','phineas','one piece']

const Home = ({history}) => {

    const [keyword,setKeyword]=useState('')

    const [loading,gifs] = useGifs()

    const handleChange=e=>setKeyword(e.target.value)

    const handleSubmit=e=>{
        e.preventDefault()
        history.push(`/search/${keyword}`)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input placeholder="Search a Gif here..." type="text" value={keyword} onChange={handleChange}/>
                <button type="submit">Buscar</button>
            </form>

            <h3 className="app-title">Los Gifs Más Populares</h3>
            
            <ul>
                {
                    POPULAR_GIFS.map(name=>(
                        <li key={name}>
                            <Link to={`/search/${name}`}>{name}</Link>
                        </li>
                    )
                    )
                }
            </ul>

            {
                loading? <Spinner/> :  <ListOfGif gifs={gifs}/>
            }
           
        </>
    )
}

export default Home
