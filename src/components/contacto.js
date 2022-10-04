import React from 'react';
import {useForm} from "react-hook-form"
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import image4 from "../imagenes/fondo2.jpg";
import { Parallax } from "react-parallax";
import './contacto.css'
import { TextField } from '@mui/material';


export default function Contacto() {

    const {register, handleSubmit, formState: { errors }} = useForm();
    const onSubmit = data => console.log(data); 


    return (
        <div id='contacto' >
            <Parallax className="imagefull" bgImage={image4} strength={100}>
                <div className='containerform'>
                    <div className='formBox'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                        <h1>CONTACTO</h1>
                            <TextField variant="filled"  className='inputs'  type='text' label="Email"{...register("mail", {
                                required: true,
                                pattern: /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
                                })}
                            aria-invalid={errors.mail ? "true": "false"}/>
                            {errors.mail?.type === 'required' && <p role='alert'>*Campo requerido</p>}
                            {errors.mail?.type === 'pattern' && <p role='alert'>*El formato de la direccion de correo no es valido</p>}

                            <TextField className='inputs' variant="filled" type='text' label="Asunto"{...register("asunto", {required: true})}
                            aria-invalid={errors.asunto ? "true": "false"}/>
                            {errors.asunto?.type === 'required' && <p role='alert'>*Campo requerido</p>}

                            <TextField className='inputs' variant="filled" type='text' label="Texto" multiline rows={10}{...register("texto", {required: true})}
                            aria-invalid={errors.texto ? "true": "false"}/>
                            {errors.texto?.type === 'required' && <p role='alert'>*Campo requerido</p>}
                            
                            <Button variant="contained" endIcon={<SendIcon />} type="submit">
                                Enviar
                            </Button>

                        </form>
                    </div>
                </div>
            </Parallax>
        </div>
    );
}

