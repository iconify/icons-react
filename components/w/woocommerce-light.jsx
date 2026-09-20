import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e4e7os4sg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e4e7os4sg"/>`,
		"fallback": "selfhst:woocommerce-light",
	});
}

export default Component;
