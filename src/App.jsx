import React from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
	return (
		<>
			<Header />
			<main className='main'>
				<Hero />
				<Skills />
				<Projects />
				<Contact />
			</main>
			<Footer />
		</>
	);
}

export default App;
