import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/khya9acyi.css';
import '../../css/z/zewlqvb7g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="khya9acyi secondary"/><path class="primary zewlqvb7g"/></g>`,
		"fallback": "iconaut:weight-duotone",
	});
}

export default Component;
