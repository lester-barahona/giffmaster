import {useEffect,useState,useRef} from 'react'

export const useNearScreen=({distance='100px'}={})=>{
    
    const [show, setshow] = useState(false)
    const elOb = useRef()

    const onChange=(entries,observer)=>{
        const el=entries[0]
        if(el.isIntersecting){
            setshow(true)
            observer.disconnect()
        }     
    }

    useEffect(() => {

        let observer
        //using polyfill for old browsers
        Promise.resolve(
            typeof IntersectionObserver === 'undefined' ?
                    IntersectionObserver : import('intersection-observer')
        ).then(()=>{

            observer =new IntersectionObserver(onChange,{rootMargin:distance})
            observer.observe(elOb.current)
        })

        return ()=>observer && observer.disconnect() //for when the element is not rendered
    }) //verify dependencies

    return [show,elOb]
}