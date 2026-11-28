import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q4vj1mb-n.css';
import '../../css/w/ws-939tgu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="q4vj1mb-n secondary"/><path class="primary ws-939tgu"/></g>`,
		"fallback": "iconaut:window-duotone",
	});
}

export default Component;
