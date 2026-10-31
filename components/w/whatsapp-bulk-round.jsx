import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y-0zbdc_n.css';
import '../../css/w/wg7q3_3dr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="y-0zbdc_n"/><path class="wg7q3_3dr"/></g>`,
		"fallback": "coolicons:whatsapp-bulk-round",
	});
}

export default Component;
