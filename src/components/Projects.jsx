import React, { useState } from "react";
import works from "../data/works";
import { Link } from "react-router-dom";
import ProjectForm from "./ProjectForm";


function Projects( {allProjects}){

    const [search, setSearch] = useState("");

    const filteredProjects = allProjects.filter((project) => {
        return project.title.toLowerCase().includes(search.toLowerCase())
    })

    return (
        <>
        <section className="w-screen h-150 md:flex justify-center items-center">
            <div>
                <h1 className="text-5xl p-2 font-mono font-bold">P R O J E C T S: </h1>
            </div>
            <div>
               {filteredProjects.map((work) => (
                <Link target="_blank" key={work.id} to={`/projects/${work.id}`}>                  
                    <h3 className="text-3xl font-light">[ {work.title} ]</h3>
                </Link>
                ))}
            </div>
                  
        </section>
        <section className="w-screen h-50 md:flex flex-col justify-center items-center">
            <input 
                id="searchbar" 
                type="text"
                value={search} onChange={(e) => setSearch(e.target.value)}
                className="" placeholder="⚫️ search projects here."/>  

                <Link to="/form" className="">⚫️ Add New Projects + </Link>
        </section>
        </>
    )
}

export default Projects;