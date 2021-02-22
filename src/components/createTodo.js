import React from "react";
import { useForm } from "react-hook-form";
import { create } from "../API/API";

export const CreateTodo = ({ restoreTask }) => {
	const { handleSubmit, register, errors } = useForm();

	const toSend = async (data, event) => {
		await create(data);
		restoreTask();
		event.target.reset();
	};

	return (
		<form
			onSubmit={handleSubmit(toSend)}
			className="container mt-5 bg-info bg-gradient"
		>
			<div className="list-group">
				<div className="p-2 bd-highlight">
					<input
						type="text"
						className="form-control"
						name="student"
						ref={register({ required: true })}
						placeholder="Write your name"
						required
					/>
				</div>
			</div>
			{errors.student && <p className="text-danger">This is required</p>}

			<div className="list-group">
				<div className="p-2 bd-highlight">
					<input
						type="text"
						className="form-control"
						name="task"
						ref={register({ required: true })}
						placeholder="Write task"
					/>
					<button className="btn btn-primary mt-2">Add To Do</button>
				</div>
			</div>
			{errors.task && <p className="text-danger">This is required</p>}
		</form>
	);
};
