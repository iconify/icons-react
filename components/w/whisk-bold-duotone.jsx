import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mnq_t02qe.css';
import '../../css/k/krkz1phgu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="mnq_t02qe"/><path class="krkz1phgu"/></g>`,
		"fallback": "solar:whisk-bold-duotone",
	});
}

export default Component;
