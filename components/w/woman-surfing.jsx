import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c9_nnybaf.css';
import '../../css/g/gy9mmo2_d.css';
import '../../css/h/h36nn6b6g.css';
import '../../css/e/eoer0xs2e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="c9_nnybaf"/><path class="gy9mmo2_d"/><path class="h36nn6b6g"/><path class="eoer0xs2e"/></g>`,
		"fallback": "fluent-emoji-high-contrast:woman-surfing",
	});
}

export default Component;
