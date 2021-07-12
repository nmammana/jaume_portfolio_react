import React, { useState } from 'react'

import Layout from '../components/Layout'

import ProjectsList from '../components/ProjectsList'
import Contact from '../components/Contact'

/***** Styles *****/
import '../components/styles/Home.css'

/***** Images *****/
import arrowDown from '../images/arrow-down.png'
import pokemonPic from '../images/img.png'
import leonidasPic from '../images/leonidas.png'
import marvolPic from '../images/📱 iPad.png'
import jasonPic from '../images/jason.png'
import netnetPic from '../images/📱 Iphone X.png'
import marcoPic from '../images/marco.png'
import Presentation from '../components/Presentation'


export default function Home() {
    const[projects, setProjects] = useState([{
        "id": 1,
        "projectImg": pokemonPic,
        "title": 'leonidasesteban.com',
        "description": 'Accede a más de 120 proyectos que te ayudarán a mejorar tus habilidades como desarrollador Front-End.',
        "buttonFirst": 'VER CóDIGO',
        "buttonSecond": 'VER PROYECTO',
        "profileImg": leonidasPic,
        "comment": '"Jaume ha sido de gran ayuda para acelerar ciertos esfuerzos de desarrollo. Lo que nos hubiera llevado 6 meses solo les llevó 1,5 meses".',
        "client": 'LEONIDAS ESTEBAN / COFUNDADOR Y CEO LEONIDASESTEBAN.COM',
        "imageFirst": "false"
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
        "imageFirst": "true"
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
        "imageFirst": "false"
    }])

    return (
        <Layout>
            <main>
                <Presentation/>

                <section className="intro" id="intro">
                    <p className="intro__message headline5">A lo largo de mi carrera como Frontend, he tenido el privilegio de trabajar en proyectos retadores e increíbles</p>
                    <p className="intro__projects headline5">Aquí hay algunos que me gustaría compartir.</p>
                    <div className="arrow_container flex_center "><img className="slidein" src={arrowDown} alt="arrow_down"></img></div>
                </section>

                <ProjectsList
                    projects = {projects}
                />
                <Contact/>
            </main>
        </Layout>              
    )
}
 