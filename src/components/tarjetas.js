import React, { useRef } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './tarjetas.css'
import { motion, useInView} from "framer-motion";
import { Parallax } from "react-parallax";
import image2 from "../imagenes/verdenegro.jpg";

export default function Tarjetas(){

    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });

    return(
        <div id='tarjetas'>
            <Parallax strength={500} className="imageprincipal" bgImage={image2}>
                    <motion.div  className='container3' ref={ref} initial={{scale: isInView ? 0.2:0}} animate={{ scale: isInView ? 1:0 }}   >
                        <Card className="card" >
                            <CardActionArea >
                                <CardMedia
                                component="img"
                                height="140"
                                image={image2}
                                alt="green iguana"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Paises
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    He desarrollado una SPA (Single Page Application) utilizando React para el Front End y Redux como state management. Todos los componentes han sido realizados con CSS sin uso de librerías externas. La SPA consume datos de una API ( restcountries.com ) a través de un Bakc End desarrollado en Node.JS utilizando Express.
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card  className="card" >
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                height="140"
                                image={image2}
                                alt="green iguana"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    A Sala Llena
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                <h4>¿Qué es A sala llena ?</h4><br/>
                                Es un punto de encuentro entre Teatros y Espectadores, que busca maximizar las ganancias del teatro llenando las últimas butacas disponibles y reducir el coste del espectador a la hora de adquirir una entrada. Para esto se desarrollo un esquema en el cual conforme se va acercando el comienzo del espectáculo se reduce el porcentaje de descuento para dicho espectáculo.
                                <br/>
                                <br/>
                                React, JavaScript, Redux, HTML5, CSS3 y distintas librerias para el Front, para el back utilizando NodeJs, PostgreSQL, Sequelize, Express, JavaScript y distintas librerías. 
                                
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </motion.div>
            </Parallax>
        </div>

)
}