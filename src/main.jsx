import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home.jsx";
import Shop from "./pages/Shop.jsx";
import MainLayout from "./layouts/MainLayout.jsx";

createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<Routes>
			<Route element={<MainLayout />}>
				<Route
					path={"/"}
					element={<Home />}
				/>
				<Route
					path={"/shop"}
					element={<Shop />}
				/>
			</Route>
		</Routes>
	</BrowserRouter>,
);
