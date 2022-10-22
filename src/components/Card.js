import React from "react";

export default function Card({ title, style = "", children }) {
	return (
		<div className={`card-container ${style}`}>
			<h3>{title}</h3>
			<div className="card-content">{children}</div>
		</div>
	);
}
