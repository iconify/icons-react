import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/urw8q1bht.css';
import '../../css/c/cgsegub5l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="urw8q1bht"/><path class="cgsegub5l"/></g>`,
		"fallback": "coolicons:zodiac-scorpio-bulk-round",
	});
}

export default Component;
