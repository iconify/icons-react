import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/v0krm2ihu.css';
import '../../css/f/fa4h6lfyh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="v0krm2ihu"/><path class="fa4h6lfyh"/></g>`,
		"fallback": "hugeicons:workflow-square-01",
	});
}

export default Component;
