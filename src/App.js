import { useEffect } from "react";
import { getData } from "./functions/getData";
import Header from "./components/Header";
import "./scss/styles.scss";

function App() {
	useEffect(() => {
		getData();
	}, []);
	return (
		<div className="App">
			<Header />
			<main></main>
		</div>
	);
}

export default App;
