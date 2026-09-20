import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cihtvxb9i.css';
import '../../css/s/s7ocxccpe.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cihtvxb9i"/><path class="s7ocxccpe"/></g>`,
		"fallback": "pepicons-pencil:wifi",
	});
}

export default Component;
