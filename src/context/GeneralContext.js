import React, { createContext, useState } from 'react';

export const GeneralContext = createContext();

export const GeneralProvider = ({ children }) => {
	const [tabIndex, setTabIndex] = useState(0);
	const [language, setLanguage] = useState('es');
	return (
		<GeneralContext.Provider
			value={{
				tabIndex,
				setTabIndex,
				language,
				setLanguage
			}}>
			{children}
		</GeneralContext.Provider>
	);
};
export default React.memo(GeneralProvider);
