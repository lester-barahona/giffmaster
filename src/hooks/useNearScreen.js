import {useEffect,useState,useRef} from 'react'

export const useNearScreen=({distance='100px',externalRef,once=true}={})=>{
    
    const [show, setshow] = useState(false)
    const elOb = useRef()

    const onChange=(entries,observer)=>{
        const el=entries[0]
        if(el.isIntersecting){
            setshow(true)
            once && observer.disconnect()
        }else{
            !once&&setshow(false)
        }     
    }

    useEffect(() => {

        let observer
        const element=externalRef?externalRef.current:elOb.current

        //using polyfill for old browsers
        Promise.resolve(
            typeof IntersectionObserver === 'undefined' ?
                    IntersectionObserver : import('intersection-observer')
        ).then(()=>{

            observer =new IntersectionObserver(onChange,{rootMargin:distance})
            if(element)
                observer.observe(element)
        })

        return ()=>observer && observer.disconnect() //for when the element is not rendered
    }) //verify dependencies

    return [show,elOb]
}