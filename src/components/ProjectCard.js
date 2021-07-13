import React, { useEffect } from 'react';

import './styles/ProjectCard.css'; 



export default function ProjectCard(props) {
    const {projectImg, title, description, buttonFirst, buttonSecond, profileImg, comment, client, imageFirst, imgSize} = props;

    
    var projectClassName = imageFirst ? "project imageFirst" : "project";
    
    /*var img = document.getElementById('projectImg');
    img.style["width"] = {imgSize}*/
    //var imgWidth = `width: ${props.imgSize}`;
    
    /*useEffect(()=>{        
        var projectPic = document.getElementsByClassName('project_pic');
        var projectPresentation = document.getElementsByClassName('project_presentation');
        var projectImg = document.getElementsByClassName('projectImg');
       
        projectPic[1].style["grid-column"] = "1/8";
        projectPic[1].style["grid-row"] = "1";
        projectPresentation[1].style['grid-column'] = '8/13';
        projectPresentation[1].style['grid-row'] = '1';
        
        projectImg[2].style['width'] = '15em';

        `project ${props.imageRight && 'image-right'}
    })*/

    console.log(imageFirst);
    return (
        <div className = "projectFull">
            <section className={projectClassName} id = "project">
                <div className="project_pic flex_center"><img className="projectImg" id="projectImg" src={projectImg} alt="" width={imgSize} ></img></div>
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
