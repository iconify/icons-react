import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/g/g0ccqzb9w.css';
import '../../css/w/w1fhcebii.css';
import '../../css/x/xeddqab8p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="g0ccqzb9w wm-shadow"/><path class="w1fhcebii wm-shadow"/><path class="xeddqab8p"/></g>`,
		"fallback": "withicons-brutal:wifi-low",
	});
}

export default Component;
