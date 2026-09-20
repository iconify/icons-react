import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xtg-q_b4t.css';
import '../../css/d/di8dvabaj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xtg-q_b4t"/><path clip-rule="evenodd" class="di8dvabaj"/></g>`,
		"fallback": "reicon:window2",
	});
}

export default Component;
