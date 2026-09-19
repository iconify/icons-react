import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j4hp13b9s.css';
import '../../css/z/zocg0ccej.css';
import '../../css/r/rnjbvnuht.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j4hp13b9s"/><path class="zocg0ccej"/><path class="rnjbvnuht"/></g>`,
		"fallback": "fluent-emoji-high-contrast:woman-in-motorized-wheelchair-facing-right",
	});
}

export default Component;
