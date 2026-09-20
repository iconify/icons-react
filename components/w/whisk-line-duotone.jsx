import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/tjearpv2d.css';
import '../../css/n/n0gdqubsa.css';
import '../../css/i/irqwneb3v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="tjearpv2d"/><path class="n0gdqubsa"/><path class="irqwneb3v"/></g>`,
		"fallback": "solar:whisk-line-duotone",
	});
}

export default Component;
