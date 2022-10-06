import React, { useRef } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './tarjetas.css'
import { motion, useInView} from "framer-motion";
import { Parallax } from "react-parallax";
import image2 from "../imagenes/negro3.jpg";
import image3 from "../imagenes/A sala llena.png";
import image4 from "../imagenes/paises.png";
import { Link } from '@mui/material'

export default function Tarjetas(){

    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });

    return(
        <div id='tarjetas'  >
            <Parallax strength={500}  bgImage={image2} >
            <div className="imageprincipal1">
                <div  className="containercards">
                    <motion.div ref={ref} initial={{scale: isInView ? 0.2:0}} animate={{ scale: isInView ? 1:0 }} transition={{duration: isInView ? 1:0}}  >
                        <Card className="card" >
                            <Link href='https://www.linkedin.com/feed/update/urn:li:activity:6892585573543202816/' target="_blank" rel="noopener" style={{textDecoration: 'none'}}>
                                <CardActionArea >
                                    <CardMedia
                                    component="img"
                                    height="140"
                                    image={image4}
                                    alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" color='black'>
                                            Paises
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Este proyecto es una pagina que contiene todos los paises en la cual podemos ver varios datos de los paises como: Poblacion, Capital etc.. Lo realice como el proyecto individual de mi paso por la academia Soy Henry.<br/><br/>
                                            Desarrollando una SPA (Single Page Application) utilizando React para el Front End y Redux como state management. Todos los componentes han sido realizados con CSS sin uso de librerías externas. La SPA consume datos de una API ( restcountries.com ) a través de un Bakc End desarrollado en Node.JS utilizando Express.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Link>
                        </Card>
                        </motion.div>
                        <motion.div ref={ref} initial={{scale: isInView ? 0.2:0}} animate={{ scale: isInView ? 1:0 }} transition={{duration: isInView ? 1:0}}  >
                        <Card  className="card" >
                            <Link href='https://www.linkedin.com/feed/update/urn:li:activity:6905146510649241600/' target="_blank" rel="noopener" style={{textDecoration: 'none'}}>
                                <CardActionArea>
                                    <CardMedia
                                    component="img"
                                    height="140"
                                    image={image3}
                                    />
                                    <CardContent >
                                        <Typography gutterBottom variant="h5" component="div" color='black'>
                                            A Sala Llena
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">

                                        Es un punto de encuentro entre Teatros y Espectadores, que busca maximizar las ganancias del teatro llenando las últimas butacas disponibles y reducir el coste del espectador a la hora de adquirir una entrada. Para esto se desarrollo un esquema en el cual conforme se va acercando el comienzo del espectáculo se reduce el porcentaje de descuento para dicho espectáculo.
                                        <br/>
                                        <br/>
                                        React, JavaScript, Redux, HTML5, CSS3 y distintas librerias para el Front, para el back utilizando NodeJs, PostgreSQL, Sequelize, Express, JavaScript y distintas librerías. 

                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Link>
                        </Card>
                    </motion.div>
                </div>
            </div>
            </Parallax>
        </div>

)
}