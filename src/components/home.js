import React ,{useEffect, useState} from "react";
import './home.css'

import CentroPrincipal from './centropagina.js';
import Tarjetas from "./tarjetas";
import ParallaxPrincipal from "./Principal";
export default function Home(){
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);


    return (
        <div className="homecontainer">
                <ParallaxPrincipal></ParallaxPrincipal>
                <CentroPrincipal/>
                <Tarjetas  />
        </div>
    )
}