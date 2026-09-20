import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d-iq-dlgv.css';
import '../../css/h/h-w_ssbzr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="d-iq-dlgv"/><path class="h-w_ssbzr"/></g>`,
		"fallback": "reicon:wifi3-filled",
	});
}

export default Component;
