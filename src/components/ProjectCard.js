import React, { useEffect } from 'react';

import './styles/ProjectCard.css'; 



export default function ProjectCard(props) {
    const {projectImg, title, description, buttonFirst, buttonSecond, profileImg, comment, client, imageFirst} = props;

    useEffect(()=>{
        /*var element = document.getElementById('project');
        element.className += " imageFirst";
                
        var elemento = document.getElementsByClassName("project");
        for(var i = 0; i < elemento.length; i++){
            elemento[i].style.background = 'red';
            elemento[i].className += "imageFirst";
        }*/
        
        var projectPic = document.getElementsByClassName('project_pic');
        var projectPresentation = document.getElementsByClassName('project_presentation');
        var projectImg = document.getElementsByClassName('projectImg');
       
        projectPic[1].style["grid-column"] = "1/8";
        projectPic[1].style["grid-row"] = "1";
        projectPresentation[1].style['grid-column'] = '8/13';
        projectPresentation[1].style['grid-row'] = '1';
        
        projectImg[2].style['width'] = '15em';
       /* for(var i=0; i<projectPic.length; i++){
            
        }
        for(var j=0; j<projectPresentation.length; j++){
            
        }*/
        
        
        /*if({imageFirst}){          
            element.style.background = 'red';
        }*/
    })

    return (
        <div className = "projectFull">
            <section className="project" id = "project">
                <div className="project_pic flex_center"><img className="projectImg" id="projectImg" src={projectImg} alt=""></img></div>
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
                <span className="profile_pic flex_center"><img src={profileImg} alt=""></img></span>
                <p className="comment comments_font">{comment}</p>
                <p className="client caption_font">{client}</p>                
            </div>
        </div>
    )
}
