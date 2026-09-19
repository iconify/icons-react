import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pxu_y3blz.css';
import '../../css/q/qkn6ysiyx.css';
import '../../css/h/ha5gndbef.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="pxu_y3blz"/><path class="qkn6ysiyx"/><path clip-rule="evenodd" class="ha5gndbef"/></g>`,
		"fallback": "healthicons:young-people2x-outline",
	});
}

export default Component;
