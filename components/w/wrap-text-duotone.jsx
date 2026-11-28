import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x681v63lh.css';
import '../../css/y/ymag1igiy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary x681v63lh"/><path class="primary ymag1igiy"/></g>`,
		"fallback": "iconaut:wrap-text-duotone",
	});
}

export default Component;
