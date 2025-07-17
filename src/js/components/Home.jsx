import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { useState } from "react";

//create your first component
const Home = () => {

	const [inputValue, setInputValue] = useState("");
	const [tareas, setTareas] = useState([]);

	const onInputChange = (e) => {
		setInputValue(e.target.value);
	}

	const handleKeyUp = (e) => {
		if (e.key == "Enter" && inputValue.trim() !== "") {
			setTareas([...tareas, inputValue]);
			setInputValue("");
		}
	}

	const eliminarTarea = (indiceAEliminar) => {
		setTareas(tareas.filter((_, index) => index !== indiceAEliminar));
	};



	return (
		<>
			<div className="container">
				<header><h1>Todas las tareas</h1></header>
				<label className="form-label" htmlFor="name" >Ecribe una tarea</label>
				<input className="form-control" id="name" type="text" value={inputValue} onChange={onInputChange} onKeyUp={handleKeyUp} />
					{tareas.map((tarea, index) => (
				<div className="" key={index}>
						<ul  style={{ display: "flex", justifyContent: "space-between"}}>
							<li style={{ listStyle: "none" }}>{tarea}</li>
							<button onClick={() => eliminarTarea(index)}>X</button>
						</ul>
						{index < tareas.length - 1 && <hr />}
				</div>
					))}
			</div>
		</>
	);
};

export default Home;