import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zr77usbnh.css';
import '../../css/p/pu-wx-jqq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zr77usbnh"/><path class="pu-wx-jqq"/></g>`,
		"fallback": "iconoir:white-flag-solid",
	});
}

export default Component;
