import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cswur-bdq.css';
import '../../css/f/fl1xj-svy.css';
import '../../css/z/zh-ha4bgk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cswur-bdq"/><path class="fl1xj-svy"/><path class="zh-ha4bgk"/></g>`,
		"fallback": "fluent-emoji-high-contrast:woman-playing-handball",
	});
}

export default Component;
