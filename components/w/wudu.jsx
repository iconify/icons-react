import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/q/qkx8_3bhc.css';
import '../../css/q/qg20r8b8l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="qkx8_3bhc"/><path class="qg20r8b8l"/></g>`,
		"fallback": "hugeicons:wudu",
	});
}

export default Component;
