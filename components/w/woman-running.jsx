import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yrbcxwbtp.css';
import '../../css/x/xwzq0ibim.css';
import '../../css/a/aos1y_4zp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yrbcxwbtp"/><path class="xwzq0ibim"/><path class="aos1y_4zp"/></g>`,
		"fallback": "fluent-emoji-high-contrast:woman-running",
	});
}

export default Component;
