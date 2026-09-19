import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/el56nxb9k.css';
import '../../css/p/p-ae7xghs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="el56nxb9k"/><path class="p-ae7xghs"/></g>`,
		"fallback": "hugeicons:web-validation",
	});
}

export default Component;
