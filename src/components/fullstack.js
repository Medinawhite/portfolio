import React from "react";
import { Parallax } from "react-parallax";

import './fullstack.css'


export default function FullStack(){
    return(
        <div id='Principal'>
            <Parallax className="imagefull" bgImage={image4} strength={100}>
                <div className="containerfull">
                    <h1>FULL STACK</h1>
                    <div className="text" >Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </div>
                </div>
            </Parallax>
        </div>
    )
}