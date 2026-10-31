import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l3h0twbhh.css';
import '../../css/s/sga20ryym.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="l3h0twbhh"/><path class="sga20ryym"/></g>`,
		"fallback": "coolicons:window-bulk-round",
	});
}

export default Component;
