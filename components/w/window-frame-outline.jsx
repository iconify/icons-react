import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/ssay0hb0x.css';
import '../../css/d/dfxmsc_9y.css';
import '../../css/s/spo_u28cc.css';
import '../../css/q/q_ug04b6w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ssay0hb0x"/><path class="dfxmsc_9y"/><path class="spo_u28cc"/><path clip-rule="evenodd" class="q_ug04b6w"/></g>`,
		"fallback": "solar:window-frame-outline",
	});
}

export default Component;
