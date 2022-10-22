import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Card from "./Card";
import CategoryTypes from "./CategoryTypes";

export default function CardContainer({}) {
	const { suburb, data } = useSelector((state) => state.data);
	const [recordList, setRecordList] = useState([]);

	useEffect(() => {
		!suburb && setRecordList([]);

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
		// console.log("Record list");
		// console.log(recordList);
		// console.log(recordList.length);
	}, [recordList]);

	return (
		<>
			{suburb && <h2>{suburb}</h2>}
			<div id="card-container">
				{recordList.length > 0 && (
					<>
						<Card title="Total">
							<p>{recordList.length}</p>
						</Card>
						<Card title="Category types" style="category-type">
							<CategoryTypes suburbList={recordList} />
						</Card>
					</>
				)}
			</div>
		</>
	);
}
