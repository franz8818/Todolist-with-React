import React from "react";
import Navbar from "./navbar";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  return (
    <>
      {/*INPUT PARA ESCRIBIR TAREAS*/}
      <Navbar />
      <div className="container col-3 text-center">
        <h1 className="mt-5">TODOS</h1>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Nueva tarea"
          />
        </div>
      </div>
      {/*LISTA DE TAREAS*/}
      <div className="container col-3 py-2">
        {/*En"style" -> JS nos dice que debemos pasar un objeto  */}
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-header">Featured</div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
