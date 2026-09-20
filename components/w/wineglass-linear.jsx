import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/s2i-i5brd.css';
import '../../css/n/n_6kijecn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="s2i-i5brd"/><path class="n_6kijecn"/></g>`,
		"fallback": "solar:wineglass-linear",
	});
}

export default Component;
