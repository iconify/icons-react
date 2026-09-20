import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/p_8xklbbj.css';
import '../../css/g/g8fm3s2qb.css';
import '../../css/y/ynfoavvdq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="p_8xklbbj"/><path class="g8fm3s2qb"/><path class="ynfoavvdq"/></g>`,
		"fallback": "solar:widget-4-broken",
	});
}

export default Component;
