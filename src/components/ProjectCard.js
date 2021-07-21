import React from 'react';

import '../styles/ProjectCard.scss'; 



export default function ProjectCard({project}) {
    const {projectImg, title, description, buttonFirst, buttonSecond, profileImg, comment, client, imageFirst, imgSize} = project;

    
    const projectClassName = imageFirst ? "project imageFirst" : "project";
    
    return (
        <div className = "projectFull">
            <section className={projectClassName} id = "project">
                <div className="project_pic flex_center"><img className="projectImg" id="projectImg" src={`assets/images/${projectImg}`} alt="" width={imgSize} ></img></div>
                <div className="project_presentation">
                    <span className="title headline5">{title}</span>
                    <p id="description" className="description body1">{description}</p>
                    <div className="project_buttons">
                        <button className="button_secondary button_font ">{buttonFirst}</button>
                        <button className="button_primary button_font">{buttonSecond}</button>
                    </div>
                </div>
            </section>
            
            <div className="client_comments" >
                <span className="profile_pic flex_center"><img src={`assets/images/${profileImg}`} alt=""></img></span>
                <p className="comment comments_font">{comment}</p>
                <p className="client caption_font">{client}</p>                
            </div>
        </div>
    )
}
