import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qxr_m4b9e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qxr_m4b9e"/>`,
		"fallback": "mingcute:x-skew-line",
	});
}

export default Component;
