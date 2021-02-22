import React from "react";

export const TodoItem = ({ todo, onChangeDelete, onChangeCheckbox }) => {
	const { _id, task, student, isCompleted } = todo;

	return (
		<>
			<label className="container d-block p-2 mt-1 me-2 pe-3 p-2 bd-highlight flex-row">
				<input
					className="form-check-input me-5"
					name="checkbox"
					type="checkbox"
					defaultChecked={isCompleted}
					onChange={(e) => onChangeCheckbox(todo, e)}
				/>
				<div className="text-wrap">
					<span>
						{task} - {student}
					</span>
					<button
						className="btn btn-danger mx-5"
						onClick={() => onChangeDelete(_id)}
					>
						Delete
					</button>
				</div>
			</label>
		</>
	);
};
