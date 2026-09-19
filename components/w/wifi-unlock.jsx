import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/gja4j_ylj.css';
import '../../css/p/pmyr5mblk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="gja4j_ylj"/><path class="pmyr5mblk"/></g>`,
		"fallback": "hugeicons:wifi-unlock",
	});
}

export default Component;
