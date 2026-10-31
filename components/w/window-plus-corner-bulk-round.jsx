import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/db4np_a7j.css';
import '../../css/n/n93ojsqhm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="db4np_a7j"/><path class="n93ojsqhm"/></g>`,
		"fallback": "coolicons:window-plus-corner-bulk-round",
	});
}

export default Component;
