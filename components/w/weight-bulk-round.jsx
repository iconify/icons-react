import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d6qr-0brt.css';
import '../../css/a/algumwb1d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="d6qr-0brt"/><path class="algumwb1d"/></g>`,
		"fallback": "coolicons:weight-bulk-round",
	});
}

export default Component;
