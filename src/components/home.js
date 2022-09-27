import React  from "react";
import './home.css'
import {
    motion,
    useScroll,
    useTransform,
} from "framer-motion";

import CentroPrincipal from './centropagina.js';
import Tarjetas from "./tarjetas.js";
import ParallaxPrincipal from "./Principal";
import FullStack from "./fullstack";
import Skills from "./skills";
import Contacto from "./contacto";

function useParallax(value, distance) {
    return useTransform(value, [0, 1], [-distance, distance]);
}



export default function Home(){
    const { scrollYProgress } = useScroll();
    const y = useParallax(scrollYProgress, 0);

    return (
        <>
                <section>
                <motion.div style={{ y }}><ParallaxPrincipal/></motion.div>
                </section>
                <section>
                <motion.div style={{ y }}><CentroPrincipal/></motion.div>
                </section>
                <section>
                <motion.div style={{ y }}><Skills/></motion.div>
                </section>
                <section>
                <motion.div style={{ y }}><Tarjetas/></motion.div>
                </section>
                <section>
                <motion.div style={{ y }}><Contacto/></motion.div>
                </section>
        </>
    )
}