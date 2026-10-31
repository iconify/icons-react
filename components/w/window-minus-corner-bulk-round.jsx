import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/db4np_a7j.css';
import '../../css/z/zhvfdkefj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="db4np_a7j"/><path class="zhvfdkefj"/></g>`,
		"fallback": "coolicons:window-minus-corner-bulk-round",
	});
}

export default Component;
