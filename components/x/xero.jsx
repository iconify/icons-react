import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nwet1abij.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nwet1abij"/>`,
		"fallback": "thesvg-color:xero",
	});
}

export default Component;
