import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qp-i_shym.css';
import '../../css/g/gv8rxj1ze.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qp-i_shym"/><path clip-rule="evenodd" class="gv8rxj1ze"/></g>`,
		"fallback": "solar:wheel-angle-bold",
	});
}

export default Component;
