import React from "react";

// This file exports the UsernameInput, PasswordInput, and FormBtn components

export function UsernameRegisterInput(props) {
	return (
		<div className="form-group">
			<input className="form-control" {...props} />
		</div>
	);
}

export function PasswordRegisterInput(props) {
	return (
		<div className="form-group">
			<input className="form-control" {...props} />
		</div>
	);
}

export function RegisterFormBtn(props) {
	return (
		<button
			{...props}
			style={{ float: "right", marginBottom: 10 }}
			className="btn btn-success"
		>
			{/* What this.props.children does is that it is used to display whatever you include between the opening and closing tags when invoking a component. */}
			{props.children}
		</button>
	);
}
