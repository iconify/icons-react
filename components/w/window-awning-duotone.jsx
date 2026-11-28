import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k5lz3xbzu.css';
import '../../css/o/owevy3sad.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="k5lz3xbzu secondary"/><path class="owevy3sad primary"/></g>`,
		"fallback": "iconaut:window-awning-duotone",
	});
}

export default Component;
