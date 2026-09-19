import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o4tl2zbsz.css';
import '../../css/e/es2vpwb6g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o4tl2zbsz"/><path class="es2vpwb6g"/></g>`,
		"fallback": "flowbite:wine-bottle-solid",
	});
}

export default Component;
