import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/dgg1804dh.css';
import '../../css/f/fg7tt6bjc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="dgg1804dh wm-k"/><path class="fg7tt6bjc wm-s"/></g>`,
		"fallback": "withicons:wifi-off-gloss",
	});
}

export default Component;
