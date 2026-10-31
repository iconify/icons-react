import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/icg3rkbvd.css';
import '../../css/r/r3gy-eg2z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="icg3rkbvd"/><path class="r3gy-eg2z"/></g>`,
		"fallback": "coolicons:webhook-bulk-round",
	});
}

export default Component;
