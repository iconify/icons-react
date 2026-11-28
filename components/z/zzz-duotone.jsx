import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jycw_sbhk.css';
import '../../css/l/lax1a33wy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jycw_sbhk secondary"/><path class="lax1a33wy primary"/></g>`,
		"fallback": "iconaut:zzz-duotone",
	});
}

export default Component;
