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


	return (
		<>
			<div className="container">
				<header><h1>Todas las tareas</h1></header>
				<label className="form-label" htmlFor="name" >Ecribe una tarea</label>
				<input className="form-control" id="name" type="text" value={inputValue} onChange={onInputChange} onKeyUp={handleKeyUp} />
				<div>
					{tareas.map((tarea, index) => (
						<ul className="" key={index}>
							<hr />{tarea}
							<button className="boton">X</button>
						</ul>
				))}
				</div>
			</div>
		</>
	);
};

export default Home;