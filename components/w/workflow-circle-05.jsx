import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/dc_0-nqwd.css';
import '../../css/h/h2oa38bsg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="dc_0-nqwd"/><path class="h2oa38bsg"/></g>`,
		"fallback": "hugeicons:workflow-circle-05",
	});
}

export default Component;
