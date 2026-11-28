import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jzvp0qbus.css';
import '../../css/e/e1z6ccbon.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jzvp0qbus secondary"/><path class="e1z6ccbon primary"/></g>`,
		"fallback": "iconaut:wheelchair-duotone",
	});
}

export default Component;
