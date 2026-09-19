import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/websu8mzr.css';
import '../../css/w/w4k50db3w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="websu8mzr"/><path class="w4k50db3w"/></g>`,
		"fallback": "hugeicons:yoga-ball",
	});
}

export default Component;
