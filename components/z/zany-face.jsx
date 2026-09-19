import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n_a46tiqm.css';
import '../../css/t/t0azqo7mr.css';
import '../../css/j/j7mo3kbwq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="n_a46tiqm"/><path class="t0azqo7mr"/><path class="j7mo3kbwq"/></g>`,
		"fallback": "fluent-emoji-high-contrast:zany-face",
	});
}

export default Component;
