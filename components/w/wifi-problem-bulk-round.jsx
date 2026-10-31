import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b7spmpbul.css';
import '../../css/u/ul0ji55js.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="b7spmpbul"/><path class="ul0ji55js"/></g>`,
		"fallback": "coolicons:wifi-problem-bulk-round",
	});
}

export default Component;
