import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/glj_52z3y.css';
import '../../css/y/yzqa19boi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="glj_52z3y"/><path clip-rule="evenodd" class="yzqa19boi"/></g>`,
		"fallback": "solar:win-rar-outline",
	});
}

export default Component;
