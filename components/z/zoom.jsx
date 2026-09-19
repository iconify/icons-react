import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fmssqmbtc.css';
import '../../css/s/swamg6x7j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fmssqmbtc"/><path class="swamg6x7j"/></g>`,
		"fallback": "grommet-icons:zoom",
	});
}

export default Component;
