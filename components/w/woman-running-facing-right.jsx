import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fqe30tb1w.css';
import '../../css/v/vmq7x5bfx.css';
import '../../css/d/d_y9jm5-q.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fqe30tb1w"/><path class="vmq7x5bfx"/><path class="d_y9jm5-q"/></g>`,
		"fallback": "fluent-emoji-high-contrast:woman-running-facing-right",
	});
}

export default Component;
