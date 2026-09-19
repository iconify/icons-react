import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lob8cabid.css';
import '../../css/r/rr4gq7bmm.css';
import '../../css/m/m2mw_5a8o.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lob8cabid"/><path class="rr4gq7bmm"/><path class="m2mw_5a8o"/></g>`,
		"fallback": "fluent-emoji-high-contrast:yo-yo",
	});
}

export default Component;
