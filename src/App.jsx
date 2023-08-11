import React from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";

function App() {
	return (
		<>
			<Header />
			<main className='main'>
				<Hero />
				<Skills />
				<Projects />
			</main>
		</>
	);
}

export default App;
