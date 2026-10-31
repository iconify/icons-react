import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/ccdd61bij.css';
import '../../css/d/de60b-sok.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ccdd61bij"/><path class="de60b-sok"/></g>`,
		"fallback": "coolicons:wolf-duotone-round",
	});
}

export default Component;
