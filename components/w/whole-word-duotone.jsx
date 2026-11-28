import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uymzwhx_c.css';
import '../../css/p/p6tmy3boy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary uymzwhx_c"/><path class="p6tmy3boy primary"/></g>`,
		"fallback": "iconaut:whole-word-duotone",
	});
}

export default Component;
