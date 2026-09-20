import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yawc-nbwa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yawc-nbwa"/>`,
		"fallback": "uis:web-grid",
	});
}

export default Component;
