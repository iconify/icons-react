import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/x/x1-7980yu.css';
import '../../css/j/j0b34b2wg.css';
import '../../css/l/lwfwi1v1t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="x1-7980yu"/><path class="j0b34b2wg"/><path class="lwfwi1v1t"/></g>`,
		"fallback": "iconoir:web-window-energy-consumption",
	});
}

export default Component;
