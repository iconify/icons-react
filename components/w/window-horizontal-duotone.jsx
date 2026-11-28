import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wuzh0jb2x.css';
import '../../css/p/p8bbl1b5v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary wuzh0jb2x"/><path class="p8bbl1b5v primary"/></g>`,
		"fallback": "iconaut:window-horizontal-duotone",
	});
}

export default Component;
