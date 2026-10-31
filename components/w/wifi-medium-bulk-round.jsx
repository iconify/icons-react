import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zz7x6-vil.css';
import '../../css/f/fotey2b3x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zz7x6-vil"/><path class="fotey2b3x"/></g>`,
		"fallback": "coolicons:wifi-medium-bulk-round",
	});
}

export default Component;
