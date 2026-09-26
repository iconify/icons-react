import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q-nli0bgs.css';
import '../../css/v/ves4kob5t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="q-nli0bgs"/><path class="ves4kob5t"/></g>`,
		"fallback": "solar:webcam-off-bold",
	});
}

export default Component;
