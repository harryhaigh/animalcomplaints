import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function CategoryTypes({ suburbList }) {
	const { suburb, data } = useSelector((state) => state.data);
	const [categoryTypes, setCategoryTypes] = useState([]);

	useEffect(() => {
		if (Object.keys(data).length !== 0 && suburb !== "") {
			const tempArray = [
				...new Set(suburbList.map((item) => item["Category: Type"])),
			];
			setCategoryTypes(tempArray);
		}
	}, [suburbList, data, suburb]);

	return (
		<>
			{categoryTypes.length > 0 && (
				<ul>
					{categoryTypes.map((item, index) => {
						return <li key={`category-${index}`}>{item}</li>;
					})}
				</ul>
			)}
		</>
	);
}
