import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jn6-orinv.css';
import '../../css/f/f-br0vb0i.css';
import '../../css/r/r_lokubqh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jn6-orinv"/><path class="f-br0vb0i"/><path class="r_lokubqh"/></g>`,
		"fallback": "solar:wi-fi-high-bold",
	});
}

export default Component;
