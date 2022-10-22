import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function CardContainer({}) {
	const { suburb, data } = useSelector((state) => state.data);
	const [recordList, setRecordList] = useState([]);

	useEffect(() => {
		if (Object.keys(data).length !== 0 && suburb !== "") {
			let tempArray = [];

			data.result.records.map((item) => {
				if (item["Location: Suburb"] === suburb) {
					tempArray.push(item);
				}
			});
			setRecordList(tempArray);
		}
	}, [suburb, data]);

	useEffect(() => {
		console.log("Record list");
		console.log(recordList);
	}, [recordList]);

	return (
		<div id="card-container">
			CardContainer
			<p>Suburb: {suburb}</p>
		</div>
	);
}
