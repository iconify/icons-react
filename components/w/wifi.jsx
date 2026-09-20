import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ihohqvbwa.css';
import '../../css/v/vb2fm7crz.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ihohqvbwa"/><path class="vb2fm7crz"/></g>`,
		"fallback": "nrk:wifi",
	});
}

export default Component;
