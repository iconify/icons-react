import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/nx9b_s0ui.css';
import '../../css/z/z111kg1sn.css';
import '../../css/z/zj2p4py0y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="nx9b_s0ui"/><path class="z111kg1sn"/><path class="zj2p4py0y"/></g>`,
		"fallback": "solar:wi-fi-high-linear",
	});
}

export default Component;
