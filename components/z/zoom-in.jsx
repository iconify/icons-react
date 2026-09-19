import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n7splobbl.css';
import '../../css/f/f5uee-srq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="n7splobbl"/><path clip-rule="evenodd" class="f5uee-srq"/></g>`,
		"fallback": "heroicons-solid:zoom-in",
	});
}

export default Component;
