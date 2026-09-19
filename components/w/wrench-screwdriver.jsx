import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j3x1046bi.css';
import '../../css/m/m5yljqb4y.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="j3x1046bi"/><path class="m5yljqb4y"/></g>`,
		"fallback": "heroicons-solid:wrench-screwdriver",
	});
}

export default Component;
