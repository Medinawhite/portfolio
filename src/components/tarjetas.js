import React, { useRef } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './tarjetas.css'
import { motion, useInView} from "framer-motion";
import { Parallax } from "react-parallax";
import image2 from "../imagenes/image2.png";

export default function Tarjetas(){

    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });

    return(
        <div id='tarjetas'>
            <Parallax strength={200} className="imageprincipal" bgImage={image2}>
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
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
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
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </motion.div>
            </Parallax>
        </div>

)
}