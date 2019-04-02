import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider, addLocaleData} from 'react-intl';

import JobsList from "./components/jobsList";
import esLocaleData from 'react-intl/locale-data/es';
import enLocaleData from 'react-intl/locale-data/en';
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

const localeMessages = (lang) => {
	var ans = null;
	switch (lang) {
		case 'en-EN':
			ans = localeEnMessages;
			break;
		default:
			ans = localeEsMessages;
			break;
	}
	return ans;
};

addLocaleData([...esLocaleData, ...enLocaleData]);

ReactDOM.render(
	<IntlProvider locale={navigator.language} messages={localeMessages(navigator.language)}>
		<JobsList/>
	</IntlProvider>, document.getElementById("root")
);
