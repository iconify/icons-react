import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wqxr1nbdd.css';
import '../../css/r/rse-0zbcp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wqxr1nbdd"/><path clip-rule="evenodd" class="rse-0zbcp"/></g>`,
		"fallback": "pepicons-print:wrench",
	});
}

export default Component;
