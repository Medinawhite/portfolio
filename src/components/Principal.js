import React from 'react';
import{Parallax} from "react-parallax";
import image2 from "../imagenes/image2.png";
import persona4 from "../imagenes/persona4.png";
import './home.css'
import { motion } from "framer-motion"
export default function ParallaxPrincipal(){

    return (
        <Parallax strength={200} className="imageprincipal" bgImage={image2}  >
                    <div className='fase1' style={{height:'100%', width:'100%'}}>
                        <motion.div className="image1"
                            initial={{opacity: 0, scale:0.5}}
                            animate={{opacity:1, scale:1}}
                            transition={{duration: 1}}
                            ><img src={persona4} alt='imagen1' /></motion.div>
                        <motion.div className='texto1'
                            initial={{x:1000}}
                            animate={{x:0}}
                            transition={{duration: 1}}
                            >
                            <h3 className='texto1' type='text' style={{size: '28px',
                                                                color: '#FFFFFF',
                                                                alignContent: 'center',
                                                                fontstyle: 'italic'}}>
                            Soy desarrollador Full-Stack con amplios conocimientos tanto en el Back-End como en el Front-End.
                            Me considero un amante de la tecnología y del código. Con muchas ganas de empezar esta carrera y de aprender.
                            </h3>
                        </motion.div>
                    </div>
                </Parallax>
    );
}