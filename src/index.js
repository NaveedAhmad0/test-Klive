import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./app/App";
import { UserProvider } from "./context/userContext";
import "./i18n";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
	<UserProvider>
		<BrowserRouter basename="/demo/star-admin-free/react/template/demo_1/preview">
			<App />
		</BrowserRouter>
	</UserProvider>,
	document.getElementById("root")
);

serviceWorker.unregister();
