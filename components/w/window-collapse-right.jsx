import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/f/f6r4u0dcm.css';
import '../../css/p/pd1h9oded.css';
import '../../css/e/eo6qbob6h.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="f6r4u0dcm"/><path class="pd1h9oded"/><path class="eo6qbob6h"/></g>`,
		"fallback": "system-uicons:window-collapse-right",
	});
}

export default Component;
