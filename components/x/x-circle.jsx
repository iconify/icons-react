import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yd1444p2v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yd1444p2v"/>`,
		"fallback": "heroicons-outline:x-circle",
	});
}

export default Component;
