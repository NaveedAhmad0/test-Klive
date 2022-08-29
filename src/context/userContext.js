import { React, useState, createContext } from "react";

const userContext = createContext();

export const UserProvider = ({ children }) => {
	const [isAdmin, setIsAdmin] = useState(false);
	const [isMerchant, setIsMerchant] = useState(false);

	const getAdminPanel = () => {
		setIsAdmin(!isAdmin);
	};
	const getMerchantPanel = () => {
		setIsMerchant(!isMerchant);
	};

	return (
		<userContext.Provider
			value={{
				isAdmin,
				isMerchant,
				getAdminPanel,
				getMerchantPanel,
			}}>
			{children}
		</userContext.Provider>
	);
};

export default userContext;
