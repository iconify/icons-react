import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cnfe1ibbf.css';
import '../../css/z/zprnm6b0n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cnfe1ibbf secondary"/><path class="primary zprnm6b0n"/></g>`,
		"fallback": "iconaut:wildfire-duotone",
	});
}

export default Component;
