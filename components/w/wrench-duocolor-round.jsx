import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rshakfbrf.css';
import '../../css/z/z_5r_ibhj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="rshakfbrf"/><path class="z_5r_ibhj"/></g>`,
		"fallback": "coolicons:wrench-duocolor-round",
	});
}

export default Component;
