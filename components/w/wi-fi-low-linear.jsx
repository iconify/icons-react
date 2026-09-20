import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/nx9b_s0ui.css';
import '../../css/z/zj2p4py0y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="nx9b_s0ui"/><path class="zj2p4py0y"/></g>`,
		"fallback": "solar:wi-fi-low-linear",
	});
}

export default Component;
