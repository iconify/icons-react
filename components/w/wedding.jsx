import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/l/l8c-d__iy.css';
import '../../css/r/r35d-sbgn.css';
import '../../css/h/hffrr9bsm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><circle class="l8c-d__iy"/><circle class="r35d-sbgn"/><path class="hffrr9bsm"/></g>`,
		"fallback": "hugeicons:wedding",
	});
}

export default Component;
