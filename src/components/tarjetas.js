import React, { useRef } from "react";
import './tarjetas.css'
import { motion, useInView } from "framer-motion";
import { Parallax } from "react-parallax";
import image2 from "../imagenes/negro2.jpg";
import { Link } from '@mui/material'
import image3 from "../logos/mascaras.png";
import image4 from "../logos/mundo.png";
export default function Tarjetas() {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });

    return (
        <div id='tarjetas'  >
            <Parallax strength={500} bgImage={image2} >
                <div className="imageprincipal1">
                    <div className="containercards">
                        <motion.div className="card" ref={ref} initial={{ scale: isInView ? 0.2 : 0 }} animate={{ scale: isInView ? 1 : 0 }} transition={{ duration: isInView ? 1 : 0 }}  >
                            <Link href='https://www.linkedin.com/feed/update/urn:li:activity:6892585573543202816/' target="_blank" rel="noopener" underline="none">
                                <img src={image4} alt='' />
                                <h2>PAISES</h2>
                                <div class="card__inner">
                                    <h2>PAISES</h2>

                                    <p>
                                    Desarrollo de una SPA (Single Page Application) utilizando
                                    React para el Front End y Redux como state management. Todos los componentes fueron desarrollados con CSS sin uso
                                    de librerías externas. La SPA consume datos de una API (
                                    restcountries.com ) a través de un Bakc End desarrollado en
                                    Node.JS utilizando Express, agregando nuevas
                                    funcionalidades a la API original.
                                    </p>
                                </div>
                            </Link>
                        </motion.div>
                        <motion.div className="card" ref={ref} initial={{ scale: isInView ? 0.2 : 0 }} animate={{ scale: isInView ? 1 : 0 }} transition={{ duration: isInView ? 1 : 0 }}  >
                            <Link href='https://www.linkedin.com/feed/update/urn:li:activity:6905146510649241600/' target="_blank" rel="noopener" underline="none">
                                <img src={image3} alt='' />
                                <h2>A SALA LLENA</h2>
                                <div class="card__inner">
                                    <h2>A SALA LLENA</h2>

                                    <p>
                                        <h3>¿Qué es A sala llena ?</h3><br/>
                                        Es un punto de encuentro entre Teatros y Espectadores, que busca maximizar las ganancias del teatro llenando las últimas butacas disponibles y reducir el coste del espectador a la hora de adquirir una entrada. Para esto se desarrollo un esquema en el cual conforme se va acercando el comienzo del espectáculo se reduce el porcentaje de descuento para dicho espectáculo.<br/>
                                        <br/>
                                        <h3>¿Qué tecnologías hemos usado?</h3><br/>
                                        React, JavaScript, Redux, HTML5, CSS3 y distintas librerias para el Front, para el back utilizando NodeJs, PostgreSQL, Sequelize, Express, JavaScript y distintas librerías.
                                        <br/>
                                        <br/>
                                        <h3>¿Cuál ha sido mi desempeño en este proyecto?</h3><br/>
                                        Mi participación ha sido en el equipo del Front, creando los componentes de formularios con la librería React-Hook-Form y aplicando el estilo de estos con Boostrap, además e implementando la funcionalidad del descuento dinámico según se va acercando el inicio de la obra con la librería React-Countdown, también he implementado el carrusel con la librería React-Caruousel. En resumen mis funciones han sido implementar funcionalidades y formularios.
                                    </p>
                                </div>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </Parallax>
        </div>

    )
}



