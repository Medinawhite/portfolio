import React, { useRef } from "react";
import { Parallax } from "react-parallax";
import './centro.css'
import image from "../imagenes/negroverde4.jpg";
import database from "../logos/sequelize.png";
import front from "../logos/React.png";
import { motion, useInView } from "framer-motion"

export default function CentroPrincipal() {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });

    return (
        <div id='Principal' className="containercentro">
            <Parallax bgImage={image} strength={500}  >
                <div className="containermedio">
                    <div  className="containertextos">
                        <div className="textos">
                            <motion.div
                            animate={{
                                scale: [0.7, 0.8, 0.7],}}
                            transition={{
                                duration: 2,
                                times: [0, 0.5, 1],
                                repeat: Infinity,
                                repeatDelay: 0
                            }}>
                            <img src={front} alt='front'/>
                            </motion.div>
                                <div className="textos1">
                                    <motion.div
                                    ref={ref}
                                    style={{
                                    transform: isInView ? "none" : "translateX(-50px)",
                                    opacity: isInView ? 1 : 0,
                                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0s"
                                    }}>
                                    <h2>FrontEnd</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                    </motion.div>
                                </div>
                        </div>
                        <div className="textos">
                            <motion.div
                                animate={{
                                    scale: [0.7, 0.8, 0.7],}}
                                transition={{
                                    duration: 2,
                                    times: [0, 0.5, 1],
                                    repeat: Infinity,
                                    repeatDelay: 0
                                }}>
                                <img src={database} alt='back'/>
                            </motion.div>
                                <div className="textos2" ref={ref}>
                                    <motion.div
                                    style={{
                                    transform: isInView ? "none" : "translateX(50px)",
                                    opacity: isInView ? 1 : 0,
                                    transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s",}}>
                                    <h2>BackEnd</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                    </motion.div>
                                </div>
                        </div>
                    </div>
                </div>
            </Parallax>
        </div>
    )
}