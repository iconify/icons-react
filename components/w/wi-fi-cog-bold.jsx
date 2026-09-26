import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/unklte81i.css';
import '../../css/u/uhqipab8n.css';
import '../../css/v/v8q09l-bp.css';
import '../../css/q/q2uz5z3xk.css';
import '../../css/a/a8i6x4bay.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="unklte81i"/><path class="uhqipab8n"/><path class="v8q09l-bp"/><path clip-rule="evenodd" class="q2uz5z3xk"/><path class="a8i6x4bay"/></g>`,
		"fallback": "solar:wi-fi-cog-bold",
	});
}

export default Component;
