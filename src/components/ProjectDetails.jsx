import { useParams } from "react-router-dom";
import works from "../data/works";
import Navbar from "./Navbar";

function ProjectDetails() {
  const { id } = useParams();

  const project = works.find((work) => work.id === Number(id));

 

  return (
    <>
    <section className="flex flex-col justify-center items-center">
      <h1>{project.title}</h1>

      <img
        src={project.image} className="w-[50%] h-[30%]"
        alt={project.title}
      />

      <p>{project.description}</p>
      <a href={project.link}> 🔗 Link to the project</a>

    </section>
    </>
  );
}

export default ProjectDetails;