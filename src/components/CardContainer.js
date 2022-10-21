import React from "react";
import { useSelector } from "react-redux";

export default function CardContainer({}) {
	const { postcode } = useSelector((state) => state.data);
	return (
		<div id="card-container">
			CardContainer
			<p>Postcode: {postcode}</p>
		</div>
	);
}
