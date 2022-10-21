import { useState, useEffect } from "react";
import { getData } from "./functions/getData";
import { useDispatch } from "react-redux";
import { updateData } from "./redux/data";
import Header from "./components/Header";
import "./scss/styles.scss";
import CardContainer from "./components/CardContainer";
import Search from "./components/Search";

function App() {
	const [data, setData] = useState(undefined);
	const dispatch = useDispatch();
	useEffect(() => {
		const bbcData = getData();
		bbcData.then((result) => {
			setData(result);
			dispatch(updateData(result));
			//console.log(result);
		});
	}, []);
	return (
		<div className="App">
			<Header records={data !== undefined ? data.result.records.length : 0} />
			<main>
				<Search />
				<CardContainer />
			</main>
		</div>
	);
}

export default App;
