import React, { useEffect, useState } from 'react'

import ProjectCard from './ProjectCard'
import Loading from './Loading';



export default function ProjectsList() {

    const[projects, setProjects] = useState(null);
    const[isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        fetch('http://localhost:8000/data')
        .then(res => {
            return res.json();
        })
        .then(data =>{
            setProjects(data);
        })
        .then(()=>{
            setIsLoading(false);
        })  
    }, []);
 
    return (
        <div>
            {isLoading && <Loading/>}
            {
                projects && projects.map((project)=>{
                    return(
                        <ProjectCard
                            key={project.id}
                            project={project}
                        />
                    )
               })
            }
        </div>
    )
}

