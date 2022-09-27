import React from "react";
import { Parallax } from "react-parallax";
import persona4 from '../imagenes/persona1.png'
import './centro.css'
import image4 from "../imagenes/image4.jpg";


export default function centroPrincipal() {
    return (
        <div id='Principal'>
            <Parallax bgImage={image4} strength={100}>
                <div className="containercentro">
                    <div className="text" >Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </div>
                    <div className="image"><img src={persona4} alt='principal'/></div>
                </div>
            </Parallax>
        </div>
    )
}