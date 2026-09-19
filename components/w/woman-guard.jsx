import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w-e4o0nkk.css';
import '../../css/u/u5chd_wam.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="w-e4o0nkk"/><path class="u5chd_wam"/></g>`,
		"fallback": "fluent-emoji-high-contrast:woman-guard",
	});
}

export default Component;
