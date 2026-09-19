import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wyc-iqbpr.css';
import '../../css/p/pbjvscbzi.css';
import '../../css/l/lq9h2c7nk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wyc-iqbpr"/><path class="pbjvscbzi"/><path class="lq9h2c7nk"/></g>`,
		"fallback": "fluent-emoji-high-contrast:woman-firefighter",
	});
}

export default Component;
