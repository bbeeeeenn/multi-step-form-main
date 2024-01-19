import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

function App() {
	return (
		<div className="container">
			<div id="steps-indicator"></div>
			<div id="step-form  "></div>
		</div>
	);
}
