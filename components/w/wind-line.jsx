import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pibo6ybvb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pibo6ybvb"/>`,
		"fallback": "mingcute:wind-line",
	});
}

export default Component;
