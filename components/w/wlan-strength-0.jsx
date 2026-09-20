import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jsxf68bdi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jsxf68bdi"/>`,
		"fallback": "ix:wlan-strength-0",
	});
}

export default Component;
