import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xdne4zbtc.css';
import '../../css/e/e4jgq3bbc.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="xdne4zbtc"/><path class="e4jgq3bbc"/></g>`,
		"fallback": "skill-icons:webflow",
	});
}

export default Component;
