import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k4x0zwmdz.css';
import '../../css/m/m7-y_v0cd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k4x0zwmdz"/><path class="m7-y_v0cd"/></g>`,
		"fallback": "coolicons:webcam-duotone-round",
	});
}

export default Component;
