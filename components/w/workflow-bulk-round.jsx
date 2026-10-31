import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y861dxbvp.css';
import '../../css/q/q_f5o-xmk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="y861dxbvp"/><path class="q_f5o-xmk"/></g>`,
		"fallback": "coolicons:workflow-bulk-round",
	});
}

export default Component;
