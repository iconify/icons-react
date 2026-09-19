import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/id5hb8b9t.css';
import '../../css/e/e0rrdfbzn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="id5hb8b9t"/><path class="e0rrdfbzn"/></g>`,
		"fallback": "iconoir:window-no-access",
	});
}

export default Component;
