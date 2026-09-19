import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/isg50z21f.css';
import '../../css/r/ry7qrib1l.css';
import '../../css/e/ez93jooon.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="isg50z21f"/><path class="ry7qrib1l"/><path clip-rule="evenodd" class="ez93jooon"/></g>`,
		"fallback": "heroicons:wrench-screwdriver-solid",
	});
}

export default Component;
