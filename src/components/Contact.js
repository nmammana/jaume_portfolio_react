import React from 'react'

import './styles/Contact.css'

export default function Contact() {
    return (
        <section className="contact" id="contact">
            <span className="title_contact title headline5">HABLEMOS</span>
            <p className="invitation body1">Si está interesado en trabajar conmigo en su próximo proyecto, no dude en ponerse en contacto conmigo.</p>
            <form action="">
                <label className="form_label required body1" for="name">Nombre completo</label><br/>
                <input className="input_field body1" type="text" name="name" placeholder="Juan"/><br/>
                <label className="form_label required body1" for="email">Correo electrónico</label><br/>
                <input className="input_field body1" type="email" name="email" placeholder="Juan@gmail.com"/><br/>
                <label className="form_label body1" for="message">Mensaje</label><br/>
                <input className="input_field body1 message_input" type="text" name="message" value=""/>
                <input className="button_primary button_font button_enviar" type="submitt" name="enviar" value="ENVIAR MENSAJE"/>
            </form>
        </section>
    )
}
