import React from "react";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Skills } from "./components/Skills/Skills";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import { Background } from "./components/Background/Background";

function App() {
	return (
		<>
			<Background />
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
