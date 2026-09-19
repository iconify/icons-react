import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/c_1j7e3uw.css';
import '../../css/s/se-o2bbid.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="c_1j7e3uw"/><path class="se-o2bbid"/></g>`,
		"fallback": "hugeicons:workout-kicking",
	});
}

export default Component;
