import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import Card from "./components/Card"
import dataCard from "./data"
import "./App.css"


export default function App() {
	const cards = dataCard.map((props) => {
		return (
			<Card 
				key={props.id}
				{...props} // props={props} -> img={props.img}, description={props.description}...
			/>
		)
	})
	return (
		<div className="container">
			<Navbar /> 
			<Main />	
			<section className="games-container">
				{cards}
			</section>
		</div>
	)
}