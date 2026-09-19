import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/v/vcszgnbgu.css';
import '../../css/n/n9n80kc-j.css';
import '../../css/o/oija6uhxn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="vcszgnbgu"/><path class="n9n80kc-j"/><path class="oija6uhxn"/></g>`,
		"fallback": "hugeicons:weight-scale",
	});
}

export default Component;
