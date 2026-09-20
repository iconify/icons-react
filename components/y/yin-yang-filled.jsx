import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pzq_7_bbq.css';
import '../../css/w/wb9-y5qxo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pzq_7_bbq"/><path class="wb9-y5qxo"/></g>`,
		"fallback": "tabler:yin-yang-filled",
	});
}

export default Component;
