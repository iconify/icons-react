import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p50o02hqx.css';
import '../../css/o/ousdnsbjs.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="p50o02hqx"/><path class="ousdnsbjs"/></g>`,
		"fallback": "fluent-emoji-high-contrast:zipper-mouth-face",
	});
}

export default Component;
