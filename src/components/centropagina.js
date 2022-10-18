import React, { useRef } from "react";
import { Parallax } from "react-parallax";
import './centro.css'
import image from "../imagenes/negroverde4.jpg";
import database from "../logos/sequelize.png";
import front from "../logos/React.png";
import { motion, useInView } from "framer-motion"

export default function CentroPrincipal() {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });

    return (
        <div id='Principal' className="containercentro">
            <Parallax bgImage={image} strength={500}  >
                <div className="containermedio">
                    <div  className="containertextos">
                        <div className="textos">
                            <motion.div
                            animate={{
                                scale: [0.7, 0.8, 0.7],}}
                            transition={{
                                duration: 2,
                                times: [0, 0.5, 1],
                                repeat: Infinity,
                                repeatDelay: 0
                            }}>
                            <img src={front} alt='front'/>
                            </motion.div>
                                <div className="textos1">
                                    <motion.div
                                    ref={ref}
                                    style={{
                                    transform: isInView ? "none" : "translateX(-50px)",
                                    opacity: isInView ? 1 : 0,
                                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0s"
                                    }}>
                                    <h2>FrontEnd</h2>
                                    <p>En el campo del Front-End tengo amplios conocimiento con React y ReactNative. Controlando los estados globales con Redux, dando estilos a la paginas con CSS y diversas librerías de estilos como: Boostrap y Material UI. <br/> También he generado animaciones como las que se pueden ver en este porfolio con Framer Motion. Mi manera de trabajar en el front es pautada y limpia, con un código legible y optimizado. </p>
                                    </motion.div>
                                </div>
                        </div>
                        <div className="textos">
                            <motion.div
                                animate={{
                                    scale: [0.7, 0.8, 0.7],}}
                                transition={{
                                    duration: 2,
                                    times: [0, 0.5, 1],
                                    repeat: Infinity,
                                    repeatDelay: 0
                                }}>
                                <img src={database} alt='back'/>
                            </motion.div>
                                <div className="textos2" ref={ref}>
                                    <motion.div
                                    style={{
                                    transform: isInView ? "none" : "translateX(50px)",
                                    opacity: isInView ? 1 : 0,
                                    transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s",}}>
                                    <h2>BackEnd</h2>
                                    <p>Respecto al Back-End he desarrollado diversas DB con Express administrando dichas bases de datos con PostgreSQL, creando las relaciones entre las distintas tablas de la DB y almacenandolas atraves de MongoDB. <br/> Para agregar, actualizar y eliminar datos de la DB utilizaba Sequelize que me ayudaba mucho a simular los comportamientos de la base de datos con las distintas URL. </p>
                                    </motion.div>
                                </div>
                        </div>
                    </div>
                </div>
            </Parallax>
        </div>
    )
}