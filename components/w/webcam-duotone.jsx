import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a0j-u97ni.css';
import '../../css/m/m0d82ib_b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a0j-u97ni secondary"/><path class="m0d82ib_b primary"/></g>`,
		"fallback": "iconaut:webcam-duotone",
	});
}

export default Component;
