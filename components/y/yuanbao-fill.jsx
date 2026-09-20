import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ntivhxb1u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ntivhxb1u"/>`,
		"fallback": "mingcute:yuanbao-fill",
	});
}

export default Component;
