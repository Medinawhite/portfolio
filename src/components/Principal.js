import React from 'react';
import{Parallax} from "react-parallax";
import image2 from "../imagenes/negro2.jpg";
import persona4 from "../imagenes/persona4.png";
import git from "../logos/git.png";
import linkedin from "../logos/linkedin.png";
import './principal.css'
import { motion } from "framer-motion"
import { Link } from '@mui/material';
export default function ParallaxPrincipal(){

    return (
        <div>
            <Parallax strength={500} className="imageprincipal" bgImage={image2}  >
                    <div className='fase1' style={{height:'100%', width:'100%'}}>
                        <motion.div className='texto1'
                            initial={{x:1000}}
                            animate={{x:0}}
                            transition={{duration: 1}}
                            >
                            <h1>Alejandro Medina</h1>
                            <h2>Full Stack Developer</h2>
                            <h3 type='text' style={{size: '28px',
                                                                color: '#FFFFFF',
                                                                alignContent: 'center',
                                                                fontstyle: 'italic'}}>
                            "Soy desarrollador Full-Stack con amplios conocimientos tanto en el Back-End como en el Front-End.
                            Me considero un amante de la tecnología y del código. Con muchas ganas de empezar esta carrera y de aprender."
                            </h3>
                            <div>
                                <Link href='https://github.com/Medinawhite' target="_blank" rel="noopener"><img src={git} alt='github' ></img></Link>
                                <Link href='https://www.linkedin.com/in/alejandro-medina-861a3b162/' target="_blank" rel="noopener"><img src={linkedin} alt='github'></img></Link>
                            </div>
                        </motion.div>
                        <motion.div className="image1"
                            initial={{opacity: 0, scale:0.5}}
                            animate={{opacity:1, scale:1}}
                            transition={{duration: 1}}
                            ><img src={persona4} alt='imagen1' />
                        </motion.div>
                    </div>
                </Parallax>
            </div>
    );
}