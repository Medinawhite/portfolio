import React from "react";
import { TemaPrincipal } from "../temas/Temaprincipal";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './tarjetas.css'
export default function Tarjetas(){
    return(
        <div id='tarjetas' className='container1' theme={TemaPrincipal}>
            <Card className="card" sx={{ maxWidth: 345  }}>
                <CardActionArea >
                    <CardMedia
                    component="img"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
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
            <Card  className="card" sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
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
        </div>
    )
}