import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lch7y8gtb.css';
import '../../css/m/m-m758b6h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lch7y8gtb secondary"/><path class="m-m758b6h primary"/></g>`,
		"fallback": "iconaut:whale-duotone",
	});
}

export default Component;
