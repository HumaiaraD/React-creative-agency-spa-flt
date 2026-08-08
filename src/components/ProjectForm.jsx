import React, { useState, } from "react";
import { useNavigate } from "react-router-dom";


function ProjectForm({setNewProject}) {

    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [link, setLink] = useState("");
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        const newProject = {
            title: title,
            category: category,
            description: description,
            image: image,
            link: link,
        }
        setNewProject(newProject)
        navigate("/projects");
    }


    return (
        <>
            <form className="flex flex-col text-2xl p-8 gap-4" onSubmit={handleSubmit}> Add projects info here
                <div>
                    <label htmlFor="ptitle">Title Of Your Project: 
                        <input className="border-b-2" id="ptitle" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </label>
                </div>
                 <div>
                    <label htmlFor="pcategory">Category: 
                        <input className="border-b-2" id="pcategory" type="text" value={category} onChange={(e) => setCategory(e.target.value)}/>
                    </label>
                </div>
                 <div>
                    <label htmlFor="pdescription">Description: 
                        <textarea
                            id="pdescription"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            rows="5"
                            className="w-full border p-3"
                        />
                    </label>
                </div>
                 <div>
                    <label htmlFor="pimg">Image: 
                        <input className="border-b-2" id="pimg" type="text" value={image} onChange={(e) => setImage(e.target.value)}/>
                    </label>
                </div>
                <div>
                    <label htmlFor="plink">Link:  
                        <input className="border-b-2" id="plink" type="text" value={link} onChange={(e) => setLink(e.target.value)}/>
                    </label>
                </div>
                <div className="w-screen flex justify-center">
                    <button type="submit" className="bg-black text-white w-[20%] p-2 rounded-2xl">Submit Project </button>
                </div>
            </form>
        </>
    )
}

export default ProjectForm;