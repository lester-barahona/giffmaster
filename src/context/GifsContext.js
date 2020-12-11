import {createContext,useState} from 'react'


const Context=createContext({
    name:'valor para quienes ',
    subscribe:'to elements no children'
})


export const GifsContext=({children})=>{

    const [gifs,setGifs] =useState([])

    return (
        <Context.Provider value={{gifs,setGifs}}>
            {children}
        </Context.Provider>
    )
}



export default Context
