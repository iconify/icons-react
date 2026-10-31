import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oi0er2bgl.css';
import '../../css/h/h_jck4npl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="oi0er2bgl"/><path class="h_jck4npl"/></g>`,
		"fallback": "coolicons:zodiac-capricorn-bulk-round",
	});
}

export default Component;
