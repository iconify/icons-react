import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qnq26wo8j.css';
import '../../css/s/sd3hecchs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qnq26wo8j"/><path class="sd3hecchs"/></g>`,
		"fallback": "coolicons:window-sidebar-bulk-round",
	});
}

export default Component;
