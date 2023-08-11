import React from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";

function App() {
	return (
		<>
			<Header />
			<main className='main'>
				<Hero />
				<Skills />
			</main>
		</>
	);
}

export default App;
