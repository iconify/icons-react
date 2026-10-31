import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ajvwqaczp.css';
import '../../css/f/fotey2b3x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ajvwqaczp"/><path class="fotey2b3x"/></g>`,
		"fallback": "coolicons:wifi-high-bulk-round",
	});
}

export default Component;
