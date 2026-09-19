import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sh756ubkl.css';

const viewBox = {"width":504,"height":408};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sh756ubkl"/>`,
		"fallback": "zmdi:wifi-lock",
	});
}

export default Component;
