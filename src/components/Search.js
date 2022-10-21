import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updatePostcode } from "../redux/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import api from "../api";

export default function Search() {
	const [postcode, setPostcode] = useState("");
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(updatePostcode(postcode));
	};

	const handleChange = (e) => {
		e.preventDefault();
		console.log(isNumeric(e.target.value));
		if (e.target.value.length === 4 && isNumeric(e.target.value)) {
			console.log("Start showing suburbs");
			console.log(api.getSuburbs());
		}
		console.log(e.target.value.length);
	};

	// Return true if only numbers are inputted
	const isNumeric = (value) => {
		return !isNaN(parseFloat(value)) && isFinite(value);
	};

	return (
		<div id="search-container">
			<form onSubmit={handleSubmit}>
				<label aria-label="Enter postcode">
					<input
						className="search-input"
						type="text"
						placeholder="Enter postcode"
						pattern="[0-9]{4}"
						maxLength="4"
						required
						onChange={(e) => handleChange(e)}
					/>
				</label>
				<button type="submit">
					<FontAwesomeIcon icon={faMagnifyingGlass} />
				</button>
			</form>
		</div>
	);
}
