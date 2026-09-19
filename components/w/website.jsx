import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ys-00mb-z.css';
import '../../css/c/c40u_364l.css';
import '../../css/j/jf3977e_v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ys-00mb-z"/><path class="c40u_364l"/><path clip-rule="evenodd" class="jf3977e_v"/></g>`,
		"fallback": "gg:website",
	});
}

export default Component;
