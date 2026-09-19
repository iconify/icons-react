import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mwio_kdke.css';
import '../../css/u/ud80o_b9s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="mwio_kdke"/><path class="ud80o_b9s"/></g>`,
		"fallback": "hugeicons:weight-scale-01",
	});
}

export default Component;
