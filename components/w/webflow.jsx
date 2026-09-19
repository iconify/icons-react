import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/e/e350e3bqm.css';
import '../../css/p/p8zmkzxbg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="e350e3bqm"/><path class="p8zmkzxbg"/></g>`,
		"fallback": "hugeicons:webflow",
	});
}

export default Component;
