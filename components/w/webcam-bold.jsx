import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i3dz-0bkp.css';
import '../../css/r/rg2nfox9v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="i3dz-0bkp"/><path clip-rule="evenodd" class="rg2nfox9v"/></g>`,
		"fallback": "solar:webcam-bold",
	});
}

export default Component;
