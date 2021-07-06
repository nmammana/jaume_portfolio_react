import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Icons from '../components/Icons'


import ProjectsList from './ProjectsList'



/***** Styles *****/
/*import './styles/Layout.css'*/
import './styles/Layout.css'

/***** Images *****/
import user from '../images/user.png'
import arrowDown from '../images/arrow-down.png'
import pokemonPic from '../images/img.png'
import leonidasPic from '../images/leonidas.png'
import marvolPic from '../images/📱 iPad.png'
import jasonPic from '../images/jason.png'
import netnetPic from '../images/📱 Iphone X.png'
import marcoPic from '../images/marco.png'



class Home extends React.Component {    
    state = {
        data: [{
            "id": 1,
            "projectImg": pokemonPic,
            "title": 'leonidasesteban.com',
            "description": 'Accede a más de 120 proyectos que te ayudarán a mejorar tus habilidades como desarrollador Front-End.',
            "buttonFirst": 'VER CóDIGO',
            "buttonSecond": 'VER PROYECTO',
            "profileImg": leonidasPic,
            "comment": '"Jaume ha sido de gran ayuda para acelerar ciertos esfuerzos de desarrollo. Lo que nos hubiera llevado 6 meses solo les llevó 1,5 meses".',
            "client": 'LEONIDAS ESTEBAN / COFUNDADOR Y CEO LEONIDASESTEBAN.COM',
            "imageFirst": "False"
        },{
            "id": 2,
            "projectImg": marvolPic,
            "title": 'MARVOL',
            "description": 'Es el sitio oficial de Marvol Entertainment. Explore películas, personajes, cómics, programas de televisión, videos y más oficiales de Marvol.',
            "buttonFirst": 'VER CóDIGO',
            "buttonSecond": 'VER PROYECTO',
            "profileImg": jasonPic,
            "comment": '"Jaume ha superado mis expectativas desde el diseño hasta el desarrollo"',
            "client": 'JASON LOPEZ / COFUNDADOR Y CEO MARVOL',
            "imageFirst": "True"
        },{
            "id": 3,
            "projectImg": netnetPic,
            "title": 'NETNET',
            "description": 'Películas y series ilimitadas y mucho más. Disfruta donde quieras. Cancela cuando quieras.',
            "buttonFirst": 'VER CóDIGO',
            "buttonSecond": 'VER PROYECTO',
            "profileImg": marcoPic,
            "comment": '"Por primera vez en la historia de nuestra empresa, aparecimos en todas las plataformas en las que trabajamos"',
            "client": 'MARCO CORTEZ / NETNET',
            "imageFirst": "False"
        }]
    }

    render(){
        return(
            <div>
                <Header/>

                <main>
                    <section className="presentation" id="presentation">
                        <div className="presentation_picture flex_center"><img src={user} alt="user_pic"></img></div>
                        <div className="presentation_text">
                            <h2 className=" headline5">¡Hola a todos!</h2>
                            <h1 className="headline3">Soy Jaume</h1>
                            <p className= "body1">Frontend Developer que le encanta implementar diseños que inspiran y atraen a las personas.</p>
                            <Icons/>
                            <button className="button_primary button_font descargar_cv">Descargar currículum</button>
                        </div>
                    </section>

                    <section className="intro" id="intro">
                        <p className="intro__message headline5">A lo largo de mi carrera como Frontend, he tenido el privilegio de trabajar en proyectos retadores e increíbles</p>
                        <p className="intro__projects headline5">Aquí hay algunos que me gustaría compartir.</p>
                        <div className="arrow_container flex_center "><img className="slidein" src={arrowDown} alt="arrow_down"></img></div>
                    </section>

                    <ProjectsList
                        projects = {this.state.data}
                    />

                    {/*<section className="project pokemon" id="project1">
                        <div className="project_pic flex_center"><img src={pokemonPic} alt=""></img></div>
                        <div className="project_presentation">
                            <span class="title headline5">leonidasesteban.com</span>
                            <p class="description body1">Accede a más de 120 proyectos que te ayudarán a mejorar 
                                tus habilidades como desarrollador Front-End.</p>
                            <div class="project_buttons">
                                <button class="button_secondary button_font ">VER CóDIGO</button>
                                <button class="button_primary button_font">VER PROYECTO</button>
                            </div>
                        </div>
                    </section>*/}
                    {/*<section class="client_comments">
                        <span class="profile_pic flex_center"><img src={leonidasPic} alt=""></img></span>
                        <p class="comment comments_font">"Jaume ha sido de gran ayuda para acelerar ciertos esfuerzos de desarrollo. Lo que nos hubiera llevado 6 meses solo les llevó 1,5 meses".</p>
                        <p class="client caption_font">LEONIDAS ESTEBAN / COFUNDADOR Y CEO LEONIDASESTEBAN.COM</p>
                    </section>*/}

                    

                    {/*<section class="project marvol">
                        <div class="project_pic flex_center"><img src={marvolPic} alt=""></img></div>
                        <div class="project_presentation">
                            <span class="title headline5">MARVOL</span>
                            <p class="description body1">Es el sitio oficial de Marvol Entertainment. Explore películas, personajes, cómics, programas de televisión, videos y más oficiales de Marvol.</p>
                            <div class="project_buttons">
                                <button class="button_secondary button_font ">VER CóDIGO</button>
                                <button class="button_primary button_font">VER PROYECTO</button>
                            </div>
                        </div>
                    </section>*/}

                    {/*<section class="client_comments">
                        <span class="profile_pic flex_center"><img src={jasonPic} alt=""></img></span>
                        <p class="comment comments_font">"Jaume ha superado mis expectativas desde el diseño hasta el desarrollo".</p>
                        <p class="client caption_font">JASON LOPEZ / COFUNDADOR Y CEO MARVOL</p>
                    </section>*/}

                    {/*<section class="project netnet">
                        <div class="project_pic flex_center"><img src={netnetPic} alt=""></img></div>
                        <div class="project_presentation">
                            <span class="title headline5">NETNET</span>
                            <p class="description body1">Películas y series ilimitadas y mucho más.
                                Disfruta donde quieras. Cancela cuando quieras.</p>
                            <div class="project_buttons">
                                <button class="button_secondary button_font button_codigo">VER CóDIGO</button>
                                <button class="button_primary button_font button_proyecto">VER PROYECTO</button>
                            </div>
                        </div>
                    </section>*/}

                    {/*<section class="client_comments">
                        <span class="profile_pic flex_center"><img src= {marcoPic} alt=""></img></span>
                        <p class="comment comments_font">"Por primera vez en la historia de nuestra empresa, aparecimos en todas las plataformas en las que trabajamos".</p>
                        <p class="client caption_font">MARCO CORTEZ / NETNET</p>
                    </section>*/}

                    <section class="contact" id="contact">
                        <span class="title_contact title headline5">HABLEMOS</span>
                        <p class="invitation body1">Si está interesado en trabajar conmigo en su próximo proyecto, no dude en ponerse en contacto conmigo.</p>
                        <form action="">
                            <label class="form_label required body1" for="name">Nombre completo</label><br/>
                            <input class="input_field body1" type="text" name="name" placeholder="Juan"/><br/>
                            <label class="form_label required body1" for="email">Correo electrónico</label><br/>
                            <input class="input_field body1" type="email" name="email" placeholder="Juan@gmail.com"/><br/>
                            <label class="form_label body1" for="message">Mensaje</label><br/>
                            <input class="input_field body1 message_input" type="text" name="message" value=""/>
                            <input class="button_primary button_font button_enviar" type="submitt" name="enviar" value="ENVIAR MENSAJE"/>
                        </form>
                    </section>
                </main>
                <Footer/>
            </div>
        )
    }
}

export default Home 