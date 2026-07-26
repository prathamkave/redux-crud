import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";

const App = () => {
	return (
		<BrowserRouter>
			<div className='flex min-h-screen flex-col bg-zinc-950 text-zinc-100'>
				<Header />

				<main className='flex-1'>
					<Routes>
						<Route
							path='/'
							element={<Home />}
						/>

						<Route
							path='/shop'
							element={<Shop />}
						/>

						<Route
							path='/cart'
							element={<Cart />}
						/>
					</Routes>
				</main>

				<Footer />
			</div>
		</BrowserRouter>
	);
};

export default App;
