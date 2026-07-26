import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
	return (
		<>
			{" "}
			<Header />
			<div className='text-6xl bg-[#111] text-amber-50'>App</div>
			<Footer />
		</>
	);
};

export default App;
