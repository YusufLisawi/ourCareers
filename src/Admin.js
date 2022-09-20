import React from "react";
import { useState } from "react";
import "./Admin.css";
import axios from "axios";

export default function Admin() {
	const [inputs, setInputs] = useState([]);
	const [msg, setMsg] = useState("");

	const chargeFields = [
		{
			required: true,
			id: "fullname",
			for: "fullname",
			label: "Full Name",
			type: "text",
			name: "fullname",
		},
		{
			required: false,
			id: "picture",
			for: "picture",
			label: "Picture Link",
			type: "text",
			name: "picture",
		},
		{
			required: true,
			id: "age",
			for: "age",
			label: "Age",
			type: "number",
			name: "age",
		},
		{
			required: true,
			id: "tele",
			for: "tele",
			label: "Telephone",
			type: "text",
			name: "tele",
		},
		{
			required: true,
			id: "nat",
			for: "nat",
			label: "Nationality",
			type: "text",
			name: "nat",
		},
		{
			required: true,
			id: "address",
			for: "address",
			label: "Address",
			type: "text",
			name: "address",
		},
		{
			required: true,
			id: "email",
			for: "email",
			label: "Email",
			type: "email",
			name: "email",
		},
		{
			required: true,
			id: "cv",
			for: "cv",
			label: "CV Link",
			type: "text",
			name: "cv",
		},
	];

	const handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setInputs((values) => ({ ...values, [name]: value }));
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(inputs);
		axios
			.post("http://localhost:8888/api/profile/save", inputs)
			.then(function (response) {
				console.log(response.data);
				setMsg("Profile has been added");
			})
			.catch((err) => {
				// Handle error
				console.log(err);
			});
	};

	return (
		<div className="admin">
			<form onSubmit={handleSubmit}>
				<fieldset>
					<legend>Add Profile</legend>
					<div className="admin__fields">
						{chargeFields.map((field) => (
							<div className="form-control">
								<label htmlFor={field.for}>{field.label}</label>
								<input
									value={inputs.name}
									onChange={handleChange}
									type={field.type}
									id={field.id}
									name={field.name}
									required={field.required}
								/>
							</div>
						))}
						<button className="btn">Add</button>
						<p style={{ color: "green", paddingTop: "10px" }}>
							{msg != "" ? msg : ""}
						</p>
					</div>
				</fieldset>
			</form>
		</div>
	);
}
