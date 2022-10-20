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
            <Parallax strength={300} className="imageprincipal" bgImage={image2}  >
                    <div className='fase1'>
                        <motion.div className='texto1'
                            initial={{x:3000}}
                            animate={{x:0}}
                            transition={{duration: 1.2}}
                            >
                            <h1>Alejandro Medina</h1>
                            <h2>Full Stack Developer</h2>
                            <h3 type='text' style={{size: '28px',
                                                                color: '#FFFFFF',
                                                                alignContent: 'center',
                                                                fontstyle: 'italic'}}>
                            "Toda la vida me he considerado un amante de la tecnología, sobre todo en el campo de la informática. He sido técnico informático por mas de 3 años y un día me dije ¡Vamos a probar con algo nuevo!. Ahí fue cuando descubrí la programación y lo que me apasionaba ver y escribir código. Desde entonces comprendí que mi carrera estaba en el mundo de la programación envuelto en código y creatividad."
                            </h3>
                            <div>
                                <Link href='https://github.com/Medinawhite' target="_blank" rel="noopener"><img src={git} alt='github' ></img></Link>
                                <Link href='https://www.linkedin.com/in/alejandro-medina-861a3b162/' target="_blank" rel="noopener"><img src={linkedin} alt='github'></img></Link>
                            </div>
                        </motion.div>
                        <div className='imgcontainer'>
                            <motion.div className="image1"
                                initial={{opacity: 0, y:400}}
                                animate={{opacity:1, y:0}}
                                transition={{duration: 1.2}}
                                ><img src={persona4} alt='imagen1' />
                            </motion.div>
                        </div>
                    </div>
                </Parallax>
            </div>
    );
}