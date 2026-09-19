import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/te6hg_6lp.css';
import '../../css/i/iv_dxx5nc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="te6hg_6lp"/><path class="iv_dxx5nc"/></g>`,
		"fallback": "fluent-emoji-high-contrast:woman-in-lotus-position",
	});
}

export default Component;
