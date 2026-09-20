import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p5w9n4rnd.css';
import '../../css/f/ft-uu_ism.css';
import '../../css/r/rm1d8ubpu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="p5w9n4rnd"/><path class="ft-uu_ism"/><path class="rm1d8ubpu"/></g>`,
		"fallback": "solar:xxx-bold",
	});
}

export default Component;
