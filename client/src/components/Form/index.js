import React from "react";

// This file exports the Input, and FormBtn components

export function Input(props) {
	return (
		<div className="form-group">
			<input className="form-control" {...props} />
		</div>
	);
}

export function FormBtn(props) {
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

// render () {
//         return (
//           <div className='container'>
//             <Picture key={picture.id} src={picture.src}>
//                 //what is placed here is passed as props.children
//             </Picture>
//           </div>
//         )
//       }

// Instead of invoking the component with a self-closing tag <Picture /> if you invoke it will full opening and closing tags <Picture> </Picture> you can then place more code between it.

// This de-couples the <Picture> component from its content and makes it more reusable.
