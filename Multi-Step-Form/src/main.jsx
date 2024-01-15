import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route
					index
					element={
						<>
							<h1>Hiii, Hello World!</h1>
						</>
					}
				/>
				<Route path="about" element={<h1>About Page</h1>} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
