import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/nx9b_s0ui.css';
import '../../css/i/ip_zkkjah.css';
import '../../css/r/rna54ibnn.css';
import '../../css/g/g40pzzt0z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="nx9b_s0ui"/><path class="ip_zkkjah"/><path class="rna54ibnn"/><path class="g40pzzt0z"/></g>`,
		"fallback": "solar:wi-fi-linear",
	});
}

export default Component;
