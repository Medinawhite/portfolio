import React from "react";
import { Parallax } from "react-parallax";
import image4 from "../imagenes/image9.jpg";
import './fullstack.css'
import logo1 from "../logos/Bootstrap_logo.png";
import logo2 from "../logos/css.png";
import logo3 from "../logos/express-js.png";
import logo4 from "../logos/framer-motion.png";
import logo5 from "../logos/HTML.png";
import logo6 from "../logos/JavaScript.png";
import logo7 from "../logos/MaterialUI.png";
import logo8 from "../logos/mongodb.png";
import logo9 from "../logos/nodejs.png";
import logo10 from "../logos/postgresql.png";
import logo11 from "../logos/React.png";
import logo12 from "../logos/redux.png";
import logo13 from "../logos/sequelize.png";
import logo14 from "../logos/TypeScript.png";
import logo15 from "../logos/webpack.png";



export default function Skills(){
    const skill=['JavaScript','NodeJs','HTML5' ]
    return(
        <div id='Skills'>
            <Parallax className="imagefull" bgImage={image4} strength={100}>
                <div className="containerfull">
                    <h1>FrontEnd</h1>
                        <ul>
                            <li ><img src='' alt=''></img>Node Js</li>
                        </ul>
                </div>
                <div className="containerfull">
                    <h1>BackEnd</h1>
                        <ul>
                            <li ><img className='' src={logo9} alt='logo'></img>Node Js</li>
                        </ul>
                </div>
            </Parallax>
        </div>
    )
}