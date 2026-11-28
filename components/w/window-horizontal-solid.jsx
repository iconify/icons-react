import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sqez8vi9v.css';
import '../../css/m/mbbnwcbew.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="sqez8vi9v"/><path class="mbbnwcbew"/></g>`,
		"fallback": "iconaut:window-horizontal-solid",
	});
}

export default Component;
