import React, { useEffect } from "react";

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

	const crearTareas = async () => {
		const response = await fetch("https://playground.4geeks.com/todo/users/todos", {
			method: "POST",
			headers: {
				"content-type":"application/json"
			},
			body: JSON.stringify(inputValue)
		})
		const data = await response.json();
		console.log(data);
		getTareas()
	}

	const getTareas = async () => {
		const response = await fetch("https://playground.4geeks.com/todo/users/KuquyZ/tareas");
		console.log(response);
		if(!response.ok){
			crearUsuario()
			return
		}
		const data = await response.json();
		console.log(data);
		setTareas(data)
	};

	const crearUsuario = async () => {
		const response = await fetch("https://playground.4geeks.com/todo/users/KuquyZ",{
			method: "POST"
		});
		console.log(response);
		const data = await response.json()
		console.log(data);
		
		
	}
	useEffect(()=>{
        getTareas()
		
	},[])



	return (
		<>
			<div className="container">
				<header><h1>Todas las tareas</h1></header>
				<label className="form-label" htmlFor="name" >Ecribe una tarea</label>
				<input className="form-control" id="name" type="text" value={inputValue} onChange={onInputChange} onKeyUp={handleKeyUp} />
				<div style={{ marginTop: "20px" }}>
					{tareas.length === 0 ? (
						<p style={{ textAlign: "center", color: "gray" }}>No hay tareas, añadir tareas</p>
					) : (
						tareas.map((tarea, index) => (
							<div key={index} style={{ padding: "5px 0" }}>
								<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
									<span>{tarea}</span>
									<button className="btn-eliminar" onClick={() => eliminarTarea(index)}>X</button>
								</div>
								{index < tareas.length - 1 && <hr />}
							</div>
						))
					)}
				</div>

			</div>
		</>
	);
};

export default Home;