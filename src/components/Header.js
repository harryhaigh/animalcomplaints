import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function Header() {
	const { data } = useSelector((state) => state.data);
	const [totalRecords, setTotalRecords] = useState("");

	useEffect(() => {
		if (Object.keys(data).length !== 0) {
			setTotalRecords(data.result.records.length);
		}
	}, [data]);

	return (
		<header>
			<h1>Animal Complaints</h1>
			<h2>Brisbane city council</h2>
			<p>Total complaints: {totalRecords}</p>
		</header>
	);
}
