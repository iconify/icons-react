import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/yfj5mabhi.css';
import '../../css/k/k9e-5ihoi.css';
import '../../css/y/ynfoavvdq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="yfj5mabhi"/><path class="k9e-5ihoi"/><path class="ynfoavvdq"/></g>`,
		"fallback": "solar:widget-4-linear",
	});
}

export default Component;
