import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ev3r4g_nh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ev3r4g_nh"/>`,
		"fallback": "mingcute:xls-line",
	});
}

export default Component;
