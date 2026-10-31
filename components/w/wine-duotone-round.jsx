import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u8_q5ybwc.css';
import '../../css/j/jj8_o7bzh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u8_q5ybwc"/><path class="jj8_o7bzh"/></g>`,
		"fallback": "coolicons:wine-duotone-round",
	});
}

export default Component;
