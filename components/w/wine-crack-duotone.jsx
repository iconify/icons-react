import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/op2_ykacn.css';
import '../../css/u/u48efmb0c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="op2_ykacn secondary"/><path class="primary u48efmb0c"/></g>`,
		"fallback": "iconaut:wine-crack-duotone",
	});
}

export default Component;
