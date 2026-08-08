import React, {useState} from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Projects from './components/Projects'
import ProjectDetails from './components/ProjectDetails'
import ProjectForm from './components/ProjectForm'
import { Route, Routes } from 'react-router-dom'
import works from './data/works'
import Contact from './components/Contact'

function App() {

  const [allProjects, setAllProjects] = useState(works);

  function handleAddProject(newProject){
    const projectWithId = {
    ...newProject,
    id: allProjects.length + 1,
  };
    setAllProjects([...allProjects, projectWithId]);
  }

  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Projects allProjects={allProjects}  />
              <Contact />
            </>
          }
        />

        <Route
          path="/projects"
          element={<Projects allProjects={allProjects}  />}
        />

        <Route
          path="/projects/:id"
          element={<ProjectDetails />}
        />

        <Route
          path="/form"
          element={
            <ProjectForm setNewProject={handleAddProject} />
          }
        />

        <Route
          path="/contact"
          element={<Contact />}
        />
      </Routes>
    </>
  );
}

export default App
