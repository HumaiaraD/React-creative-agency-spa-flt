import { useParams } from "react-router-dom";
import works from "../data/works";
import Navbar from "./Navbar";

function ProjectDetails() {
  const { id } = useParams();

  const project = works.find((work) => work.id === Number(id));

 

  return (
    <>
    <section className="flex flex-col sm:p-2 md:p-10 gap-4 justify-center items-center">
      <h1 className="text-3xl  ">{project.title}</h1>

      <img
        src={project.image} className="w-[50%] h-[30%]"
        alt={project.title}
      />

      <p>{project.category}</p>
      <p className="w-[50%]">{project.description}</p>
      <a href={project.link}> 🔗 Link to the project</a>

    </section>
    </>
  );
}

export default ProjectDetails;