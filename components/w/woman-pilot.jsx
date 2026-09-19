import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/svh0h_bof.css';
import '../../css/h/h2rcjqw5y.css';
import '../../css/c/co_0nyjkh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="svh0h_bof"/><path class="h2rcjqw5y"/><path class="co_0nyjkh"/></g>`,
		"fallback": "fluent-emoji-high-contrast:woman-pilot",
	});
}

export default Component;
