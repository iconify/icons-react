import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/w4hhk960c.css';
import '../../css/f/fndk22baw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="w4hhk960c"/><path class="fndk22baw"/></g>`,
		"fallback": "hugeicons:wifi-disconnected-01",
	});
}

export default Component;
