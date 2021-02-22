import React, { useState, useEffect } from "react";
import { TodoItem } from "./todoItem";
import { CreateTodo } from "./createTodo";
import { get, remove, update } from "../API/API";

export const TodoContainer = () => {
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		restoreTask();
	}, []);

	const restoreTask = () => {
			get()
				.then((response) => {
					setTasks(response.data.todos);
				})
				.catch();
		},
		handleChangeDelete = async (id) => {
			await remove(id);
			restoreTask();
		},
		handleCheckbox = async (todo, e) => {
			const { checked } = e.target;
			await update(todo._id, { ...todo, isCompleted: checked });
			restoreTask();
		};

	return (
		<>
			<CreateTodo restoreTask={restoreTask} />
			<div className="container table table-striped table-bordered bg-info bg-gradient">
				{tasks &&
					tasks.map((task) => (
						<TodoItem
							key={task._id}
							todo={task}
							onChangeDelete={handleChangeDelete}
							onChangeCheckbox={handleCheckbox}
						/>
					))}
			</div>
		</>
	);
};
