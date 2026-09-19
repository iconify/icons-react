import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nqtyc-j4c.css';
import '../../css/y/ysptlrvqq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="nqtyc-j4c"/><path class="ysptlrvqq"/></g>`,
		"fallback": "heroicons:wrench-screwdriver-20-solid",
	});
}

export default Component;
