import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { newsApi } from "./state/news/apiSlice";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<ApiProvider api={newsApi}>
			<App />
		</ApiProvider>
	</React.StrictMode>
);
