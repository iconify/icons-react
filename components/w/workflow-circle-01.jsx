import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/dgyt_5btx.css';
import '../../css/x/xuzkrccjm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="dgyt_5btx"/><path class="xuzkrccjm"/></g>`,
		"fallback": "hugeicons:workflow-circle-01",
	});
}

export default Component;
