import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/spt55ub2j.css';
import '../../css/v/vm6awkx0b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="spt55ub2j"/><path class="vm6awkx0b"/></g>`,
		"fallback": "hugeicons:yen",
	});
}

export default Component;
