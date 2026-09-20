import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n6xu27b1i.css';
import '../../css/i/i9fu-bzyh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="n6xu27b1i"/><path class="i9fu-bzyh"/></g>`,
		"fallback": "solar:wi-fi-low-bold",
	});
}

export default Component;
