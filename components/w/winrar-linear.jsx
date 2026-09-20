import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/l/le-vwfb-i.css';
import '../../css/w/wq6ndfbyz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="le-vwfb-i"/><path class="wq6ndfbyz"/></g>`,
		"fallback": "solar:winrar-linear",
	});
}

export default Component;
