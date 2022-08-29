import React, { useContext, useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import "./App.scss";
import AppRoutes from "./AppRoutes";
import Navbar from "./shared/Navbar";
import Sidebar from "./shared/Sidebar";
import SettingsPanel from "./shared/SettingsPanel";
import Footer from "./shared/Footer";
import { withTranslation } from "react-i18next";
import userContext from "../context/userContext";
import MerchantSidebar from "./shared/Merchant-Sidebar";

function App(props) {
	const [isFullPageLayout, setisFullPageLayout] = useState(false);
	const { isAdmin, isMerchant } = useContext(userContext);

	let navbarComponent = isFullPageLayout ? <Navbar /> : "";
	let sidebarComponent = isFullPageLayout ? <Sidebar /> : "";
	// let merchantSidebarComponent = isFullPageLayout ? <MerchantSidebar /> : "";
	let SettingsPanelComponent = isFullPageLayout ? <SettingsPanel /> : "";
	let footerComponent = isFullPageLayout ? <Footer /> : "";

	const onRouteChanged = () => {
		console.log("ROUTE CHANGED");
		const { i18n } = props;
		const body = document.querySelector("body");
		if (props.location.pathname === "/layout/RtlLayout") {
			body.classList.add("rtl");
			i18n.changeLanguage("ar");
		} else {
			body.classList.remove("rtl");
			i18n.changeLanguage("en");
		}
		window.scrollTo(0, 0);
		const fullPageLayoutRoutes = [
			"/user-pages/login-1",
			"/user-pages/login-2",
			"/user-pages/register-1",
			"/user-pages/register-2",
			"/user-pages/lockscreen",
			"/error-pages/error-404",
			"/error-pages/error-500",
			"/general-pages/landing-page",
		];
		for (let i = 0; i < fullPageLayoutRoutes.length; i++) {
			if (props.location.pathname === fullPageLayoutRoutes[i]) {
				setisFullPageLayout({
					isFullPageLayout: true,
				});
				document
					.querySelector(".page-body-wrapper")
					.classList.add("full-page-wrapper");
				break;
			} else {
				setisFullPageLayout({
					isFullPageLayout: false,
				});
				document
					.querySelector(".page-body-wrapper")
					.classList.remove("full-page-wrapper");
			}
		}
	};
	useEffect(() => {
		onRouteChanged();
	}, [props.location]);
	useEffect(() => {
		onRouteChanged();
	}, []);

	return (
		<div className="container-scroller">
			{navbarComponent}
			<div className="container-fluid page-body-wrapper">
				{/* {isAdmin && sidebarComponent}
				{isMerchant && merchantSidebarComponent} */}
				{sidebarComponent}
				<div className="main-panel">
					<div className="content-wrapper">
						<AppRoutes />
						{SettingsPanelComponent}
					</div>
					{footerComponent}
				</div>
			</div>
		</div>
	);
}

export default withTranslation()(withRouter(App));
// import React, { useContext, useEffect, useState } from "react";
// import { withRouter } from "react-router-dom";
// import "./App.scss";
// import AppRoutes from "./AppRoutes";
// import Navbar from "./shared/Navbar";
// import Sidebar from "./shared/Sidebar";
// import MerchantSidebar from "./shared/Merchant-Sidebar";
// import SettingsPanel from "./shared/SettingsPanel";
// import Footer from "./shared/Footer";
// import { withTranslation } from "react-i18next";
// import userContext from "../context/userContext";

// function App(props) {
// 	// const { isAdmin, isMerchant } = useContext(userContext);	// state = {};
// 	// componentDidMount() {
// 	// 	this.onRouteChanged();
// 	// }
// 	const [isFullPageLayout, setIsFullPageLayout] = useState(false);

// 	const onRouteChanged = () => {
// 		console.log("ROUTE CHANGED");
// 		const { i18n } = props;
// 		const body = document.querySelector("body");
// 		if (props.location.pathname === "/layout/RtlLayout") {
// 			body.classList.add("rtl");
// 			i18n.changeLanguage("ar");
// 		} else {
// 			body.classList.remove("rtl");
// 			i18n.changeLanguage("en");
// 		}
// 		window.scrollTo(0, 0);
// 		const fullPageLayoutRoutes = [
// 			"/user-pages/login-1",
// 			"/user-pages/login-2",
// 			"/user-pages/register-1",
// 			"/user-pages/register-2",
// 			"/user-pages/lockscreen",
// 			"/error-pages/error-404",
// 			"/error-pages/error-500",
// 			"/general-pages/landing-page",
// 		];
// 		for (let i = 0; i < fullPageLayoutRoutes.length; i++) {
// 			if (props.location.pathname === fullPageLayoutRoutes[i]) {
// 				setIsFullPageLayout({
// 					isFullPageLayout: true,
// 				});
// 				document
// 					.querySelector(".page-body-wrapper")
// 					.classList.add("full-page-wrapper");
// 				break;
// 			} else {
// 				setIsFullPageLayout({
// 					isFullPageLayout: false,
// 				});
// 				document
// 					.querySelector(".page-body-wrapper")
// 					.classList.remove("full-page-wrapper");
// 			}
// 		}
// 	};

// 	let navbarComponent = !isFullPageLayout ? <Navbar /> : "";
// 	let AdminsidebarComponent = !isFullPageLayout ? <Sidebar /> : "";
// 	let merchantSidebarComponent = !isFullPageLayout ? <MerchantSidebar /> : "";
// 	let SettingsPanelComponent = !isFullPageLayout ? <SettingsPanel /> : "";
// 	let footerComponent = !isFullPageLayout ? <Footer /> : "";

// 	useEffect(() => {
// 		onRouteChanged();
// 	}, []);

// 	return (
// 		<div className="container-scroller">
// 			{navbarComponent}
// 			<div className="container-fluid page-body-wrapper">
// 				{isAdmin && AdminsidebarComponent}
// 				{/* {isMerchant && merchantSidebarComponent} */}
// 				<div className="main-panel">
// 					<div className="content-wrapper">
// 						<AppRoutes />
// 						{SettingsPanelComponent}
// 					</div>
// 					{footerComponent}
// 				</div>
// 			</div>
// 		</div>
// 	);

// 	// componentDidUpdate(prevProps) {
// 	// 	if (this.props.location !== prevProps.location) {
// 	// 		this.onRouteChanged();
// 	// 	}
// 	// }
// }

// export default withTranslation()(withRouter(App));
