import React from "react";
import { Parallax } from "react-parallax";
import './centro.css'
import image from "../imagenes/fondo1.jpg";
import database from "../logos/database.png";
import front from "../logos/front.png";

export default function centroPrincipal() {
    return (
        <div id='Principal' className="containercentro">
            <Parallax bgImage={image} strength={500}  >
                <div className="containermedio">
                    <div  className="containertextos">
                        <div className="textos">
                            <img src={front} alt='front'/>
                            <div>
                                <h2>FrontEnd</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div>
                        </div>
                        <div className="textos">
                            <img src={database} alt='back'/>
                            <div>
                                <h2>BackEnd</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Parallax>
        </div>
    )
}