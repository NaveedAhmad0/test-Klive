import React, { useContext } from "react";
import userContext from "../context/userContext";

const HomePage = () => {
	const { getAdminPanel, getMerchantPanel } = useContext(userContext);
	return (
		<div>
			<div>
				<button className="btn btn-primary" onClick={getAdminPanel()}>
					Admin
				</button>
			</div>
			<div>
				<button className="btn btn-primary" onClick={getMerchantPanel()}>
					Merchant
				</button>
			</div>
			<div>
				<button className="btn btn-primary"></button>
			</div>
		</div>
	);
};

export default HomePage;
