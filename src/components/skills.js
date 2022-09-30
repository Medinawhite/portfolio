import React from "react";
import { Parallax } from "react-parallax";
import image2 from "../imagenes/exagononegro.jpg";
import './skills.css'
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
    return(
        <div id='Skills' className="containerskills">
            <Parallax className="imagefull" strength={500} blur={0} bgImage={image2} >
                <div className="containerskill">
                    <div className="skillscard">
                        <h1>Lenguajes</h1>
                            <ul className="lista">
                                <li ><img src={logo6} alt='logo'></img><p>JAVA SCRIPT</p></li>
                                <li ><img src={logo14} alt='logo'></img><p>TYPE SCRIPT</p></li>
                            </ul>
                    </div>
                    <div className="skillscard">
                        <h1>FrontEnd</h1>
                            <ul className="lista">
                                <li ><img src={logo5} alt='logo'></img><p>HTML 5</p></li>
                                <li ><img src={logo2} alt='logo'></img><p>CSS</p></li>
                                <li ><img src={logo11} alt='logo'></img><p>REACT</p></li>
                                <li ><img src={logo12} alt='logo'></img><p>REDUX</p></li>
                                <li ><img src={logo4} alt='logo'></img><p>F MOTION</p></li>
                                <li ><img src={logo15} alt='logo'></img><p>WEBPACK</p></li>
                                <li ><img src={logo1} alt='logo'></img><p>BOOSTRAP</p></li>
                                <li ><img src={logo7} alt='logo'></img><p>MATERIAL UI</p></li>
                            </ul>
                    </div>
                    <div className="skillscard">
                        <h1>BackEnd</h1>
                            <ul className="lista">
                                <li ><img src={logo9} alt='logo'></img><p>NODE JS</p></li>
                                <li ><img src={logo3} alt='logo'></img><p>EXPRESS</p></li>
                                <li ><img src={logo8} alt='logo'></img><p>MONGODB</p></li>
                                <li ><img src={logo10} alt='logo'></img><p>POSTGRE SQL</p></li>
                                <li ><img src={logo13} alt='logo'></img><p>SEQUELIZE</p></li>
                            </ul>
                    </div>
                </div>
            </Parallax>
        </div>
    )
}