import React from 'react';
import{Parallax} from "react-parallax";
import image2 from "../imagenes/image2.png";
import persona4 from "../imagenes/persona4.png";
import './home.css'
export default function ParallaxPrincipal(){
    return (
        <Parallax bgImage={image2} strength={600} blur={{min: -1, max:3}}>
                    <div className='fase1' style={{height:'100%', width:'100%'}}>
                        <div className="image1"><img src={persona4} alt='imagen1' /></div>
                        <div className='texto1'>
                        <h3 className='texto1' type='text' style={{size: '28px',
                                                            color: '#FFFFFF',
                                                            alignContent: 'center',
                                                            fontstyle: 'italic'}}>
                        Soy desarrollador Full-Stack con amplios conocimientos tanto en el Back-End como en el Front-End.
                        Me considero un amante de la tecnología y del código. Con muchas ganas de empezar esta carrera y de aprender.
                        </h3>
                        </div>
                    </div>
                </Parallax>
    );
}