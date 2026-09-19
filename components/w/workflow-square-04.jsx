import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/r384zui5v.css';
import '../../css/w/wjl38rbsq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="r384zui5v"/><path class="wjl38rbsq"/></g>`,
		"fallback": "hugeicons:workflow-square-04",
	});
}

export default Component;
