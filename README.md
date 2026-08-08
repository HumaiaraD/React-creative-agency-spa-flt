# HD Creative Agency

A modern creative agency and personal project showcase built with React and Tailwind CSS. The application highlights featured projects, provides detailed project pages through client-side routing, and allows users to dynamically add new projects through a form.

## Features

* Responsive landing page
* Project showcase section
* Search projects by name
* Individual project detail pages
* Client-side routing with React Router
* Add new projects dynamically through a controlled form
* Project title, category, description, image, and project link support
* Responsive navigation menu
* Contact section
* Modern black-and-white creative agency styling
* GSAP-inspired motion and visual design elements

## Technologies Used

* React
* JavaScript
* Vite
* Tailwind CSS
* React Router
* GSAP
* HTML5 semantic elements

## Project Structure

```text
src/
├── assets/
├── components/
│   ├── Navbar.jsx
│   ├── Home.jsx
│   ├── Projects.jsx
│   ├── ProjectDetails.jsx
│   ├── ProjectForm.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── data/
│   └── works.js
├── App.jsx
├── main.jsx
└── index.css
```

## Project Routing

The application uses React Router for client-side navigation.

```text
/                 Home page
/projects         All projects
/projects/:id     Individual project details
/form             Add a new project
/contact          Contact page
```

## Adding Projects

Users can add a new project through the project submission form.

Each project contains:

* Title
* Category
* Description
* Image
* Project link

Submitted projects are added dynamically to the project list using React state.

## Search

The Projects section includes a search feature that filters projects by title in real time.

For example, searching:

```text
Tanjiro
```

will display projects whose title includes "Tanjiro".

## Running the Project

Clone the repository and install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open the local Vite development URL in your browser.

## Purpose

This project was created to practice building a complete React application using component-based architecture, controlled forms, state management, dynamic rendering, filtering, responsive design, and client-side routing.

## Video Attribution

Video content used in the project belongs to GSAP and is included for educational and portfolio demonstration purposes. This project is not affiliated with or endorsed by GSAP.
