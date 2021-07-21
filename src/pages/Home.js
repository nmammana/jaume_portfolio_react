import React from 'react'

import Layout from '../components/Layout'
import Presentation from '../components/Presentation'
import ProjectsList from '../components/ProjectsList'
import Contact from '../components/Contact'

/***** Styles *****/
import '../styles/Home.scss'

/***** Images *****/
import arrowDown from '../assets/images/arrow-down.png'


export default function Home() {
    
    return (
        <Layout>
            <main>
                <Presentation/>

                <section className="intro" id="intro">
                    <p className="intro__message headline5">A lo largo de mi carrera como Frontend, he tenido el privilegio de trabajar en proyectos retadores e increíbles</p>
                    <p className="intro__projects headline5">Aquí hay algunos que me gustaría compartir.</p>
                    <div className="arrow_container flex_center "><img className="slidein" src={arrowDown} alt="arrow_down"></img></div>
                </section>

                <ProjectsList/>
                <Contact/>
            </main>
        </Layout>              
    )
}
 