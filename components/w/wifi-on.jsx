import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/y036-m6ty.css';
import '../../css/z/zyz74-2cr.css';
import '../../css/u/u84m1l8lx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="y036-m6ty"/><path class="zyz74-2cr"/><path class="u84m1l8lx"/></g>`,
		"fallback": "streamline-freehand:wifi-on",
	});
}

export default Component;
