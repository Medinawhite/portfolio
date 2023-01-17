import React from 'react';
import {useForm} from "react-hook-form"
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';

// import { Parallax } from "react-parallax";
import './contacto.css'
import { TextField } from '@mui/material';
import emailjs from '@emailjs/browser'

export default function Contacto() {

    const {register, handleSubmit,reset, formState: { errors }} = useForm();

    const onSubmit= (formData)=> {
        emailjs.send('service_1s3xyrc','template_afipkvb',formData,'m5z1x3Y2Ffgz_58di' )
        .then((respuesta=>{console.log(respuesta)}))
        .catch((error)=>{console.log(error)})
        reset();
    }



    return (
        <div id='contacto' className='containercontacto'>
            {/* <Parallax className="imagefull" bgImage={image4} strength={500}> */}
                <div className='containerform'>
                    <div className='formBox'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h1>CONTACTO</h1>
                                <TextField 
                                    variant="standard" 
                                    margin="dense" 
                                    color="success"  
                                    className='inputs'  
                                    type='text' 
                                    label="Email"
                                        {...register("mail", {
                                        required: true,
                                        pattern: /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
                                        })}
                                        aria-invalid={errors.mail ? "true": "false"}/>
                                        {errors.mail?.type === 'required' && <p role='alert'>*Campo requerido</p>}
                                        {errors.mail?.type === 'pattern' && <p role='alert'>*El formato de la direccion de correo no es valido</p>}

                                <TextField
                                    className='inputs'
                                    margin="dense"
                                    color="success"
                                    variant="standard"
                                    type='text'
                                    label="Asunto"
                                        {...register("asunto", {required: true})}
                                        aria-invalid={errors.asunto ? "true": "false"}/>
                                        {errors.asunto?.type === 'required' && <p role='alert'>*Campo requerido</p>}

                                <TextField
                                    className='inputs'
                                    margin="dense"
                                    color="success"
                                    variant="standard"
                                    type='text'
                                    label="Mensaje"
                                    multiline
                                    rows={10}
                                        {...register("mensaje", {required: true})}
                                        aria-invalid={errors.texto ? "true": "false"}/>
                                        {errors.mensaje?.type === 'required' && <p role='alert'>*Campo requerido</p>}

                                <Button variant="contained" endIcon={<SendIcon/>} type="submit">
                                    Enviar
                                </Button>

                        </form>
                    </div>
                </div>
            {/* </Parallax> */}
        </div>
    );
}

