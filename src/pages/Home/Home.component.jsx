import React from "react";
import { useHistory } from "react-router-dom";
import Heading from "../../components/Heading/Heading.component";
import "./Home.style.css";

const Home = () => {
  const history = useHistory();
  return (
    <>
      <div className="task">
        <Heading title="Frontend Assignment"/>
        <div className="description">
          <p>
            The goal is to retrieve and display data provided by Ontology Lookup
            Service repository (
            <a
              href="https://www.ebi.ac.uk/ols/index"
              target="_blank"
              rel="noreferrer"
            >
              https://www.ebi.ac.uk/ols/index
            </a>
            ). You should implement a web application that does the following:
          </p>
          <p>
            Displays all terms in a dynamic table through the provided API (
            <a
              href="https://www.ebi.ac.uk/ols/api/ontologies/efo/terms"
              target="_blank"
              rel="noreferrer"
            >
              https://www.ebi.ac.uk/ols/api/ontologies/efo/terms
            </a>
            ). You are free to use pagination functionality, if you think it is
            necessary.
          </p>
          <p>
            You are limited to implementing this with any/all of the following:
            JS, React, Redux, Typescript. You are requested not to use a UI
            library and avoid any redundant npm packages (e.g. no imported
            Table, dropdown, etc.). Feel free to use custom styling, where you
            think is appropriate.
          </p>
          <p>
            There should be clear instructions on how to setup and run the
            application in a new development environment. Please provide the
            solution as a git code repository in your preferred free git hosting
            service.
          </p>
          <p>
            The implementation will be evaluated against: Efficiency of
            implementation, i.e. minimized response times, re-renders, etc use
            of best practices that promote modularity, code re-use,
            maintainability, code readability and quality
          </p>
          <p>
            Bonus: implement a dropdown that controls the number of items per
            page
          </p>
        </div>
        <div className="linkto" onClick={() => history.push("/solution")}>
          Go to Solution &gt;
        </div>
      </div>
    </>
  );
};

export default Home;
