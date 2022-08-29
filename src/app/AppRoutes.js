import React, { Component, Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Spinner from "../app/shared/Spinner";

const UserDashboard = lazy(() =>
	import("../User Panel/User-Panel-Pages/User-Dashboard/UserDashboard")
);

const Buttons = lazy(() => import("./basic-ui/Buttons"));
const Dropdowns = lazy(() => import("./basic-ui/Dropdowns"));

const BasicElements = lazy(() => import("./form-elements/BasicElements"));

const BasicTable = lazy(() => import("./tables/BasicTable"));

const Mdi = lazy(() => import("./icons/Mdi"));

const ChartJs = lazy(() => import("./charts/ChartJs"));

const Error404 = lazy(() => import("./error-pages/Error404"));
const Error500 = lazy(() => import("./error-pages/Error500"));

const Login = lazy(() => import("./user-pages/Login"));
const Register1 = lazy(() => import("./user-pages/Register"));

// USER PANEL IMPORTS

const UserTransaction = lazy(() =>
	import(
		"../User Panel/User-Panel-Pages/User-Payment_Transaction/UserPaymentTransaction"
	)
);
const UserSettlementReport = lazy(() =>
	import(
		"../User Panel/User-Panel-Pages/User-Settlement-Report/UserSettlementReport"
	)
);
const UserVoid = lazy(() =>
	import("../User Panel/User-Panel-Pages/Void/UserVoid")
);
const UserRefund = lazy(() =>
	import("../User Panel/User-Panel-Pages/Refund/UserRefund")
);
const UserProfile = lazy(() =>
	import("../User Panel/User-Panel-Pages/User-Profile/UserProfile")
);
const UserChangePassword = lazy(() =>
	import(
		"../User Panel/User-Panel-Pages/User-Change-Password/UserChangePassword"
	)
);
const UserMerchantProfile = lazy(() =>
	import(
		"../User Panel/User-Panel-Pages/UserPanel-Merchant-profile/UserMerchantProfile"
	)
);
const UserManageUser = lazy(() =>
	import("../User Panel/User-Panel-Pages/User-Manage-users/UsersManageUser")
);
const UserManageRole = lazy(() =>
	import("../User Panel/User-Panel-Pages/User-Manage-Role/UserManageRole")
);

class AppRoutes extends Component {
	render() {
		return (
			<Suspense fallback={<Spinner />}>
				<Switch>
					<Route exact path="/user/dashboard" component={UserDashboard} />

					<Route path="/basic-ui/buttons" component={Buttons} />
					<Route path="/basic-ui/dropdowns" component={Dropdowns} />

					<Route
						path="/form-Elements/basic-elements"
						component={BasicElements}
					/>

					<Route path="/tables/basic-table" component={BasicTable} />

					<Route path="/icons/mdi" component={Mdi} />

					<Route path="/charts/chart-js" component={ChartJs} />

					<Route path="/user-pages/login-1" component={Login} />
					<Route path="/user-pages/register-1" component={Register1} />

					{/*------------------------- USER PANEL ROUTES -------------------------- */}

					<Route
						path="/user/UserPaymentTransaction"
						component={UserTransaction}
					/>
					<Route
						path="/user/UserSettlementReport"
						component={UserSettlementReport}
					/>
					<Route path="/user/UserVoid" component={UserVoid} />
					<Route path="/user/UserRefund" component={UserRefund} />
					<Route path="/user/UserProfile" component={UserProfile} />
					<Route
						path="/user/UserChangePassword"
						component={UserChangePassword}
					/>
					<Route
						path="/user/UserMerchantProfile"
						component={UserMerchantProfile}
					/>
					<Route path="/user/UserManageUser" component={UserManageUser} />
					<Route path="/user/UserManageRole" component={UserManageRole} />

					{/*---------------------------- ERROR PAGE ------------------ */}

					<Route path="/error-pages/error-404" component={Error404} />
					<Route path="/error-pages/error-500" component={Error500} />

					<Redirect to="/user/dashboard" />
				</Switch>
			</Suspense>
		);
	}
}

export default AppRoutes;
