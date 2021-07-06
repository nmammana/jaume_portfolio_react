import React from 'react';

import './styles/ProjectCard.css'; 

class ProjectCard extends React.Component {
    render() {
        const {projectImg, title, description, buttonFirst, buttonSecond, profileImg, comment, client} = this.props
        
        return (
            <div className = "projects" id = "projects" >
                <section className="project" id = "project">
                    <div className="project_pic flex_center"><img id="projectImg" src={projectImg} alt=""></img></div>
                    <div className="project_presentation">
                        <span class="title headline5">{title}</span>
                        <p class="description body1">{description}</p>
                        <div class="project_buttons">
                            <button class="button_secondary button_font ">{buttonFirst}</button>
                            <button class="button_primary button_font">{buttonSecond}</button>
                        </div>
                    </div>
                    <script src = "PosicionarImagen.js"></script>
                </section>

                
                

                <div className="client_comments" >
                    <span className="profile_pic flex_center"><img src={profileImg} alt=""></img></span>
                    <p className="comment comments_font">{comment}</p>
                    <p className="client caption_font">{client}</p>                
                </div>
            </div>
            
            
        )
        
    }
}

export default ProjectCard;