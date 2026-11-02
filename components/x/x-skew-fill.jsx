import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/scww_2y7m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="scww_2y7m"/>`,
		"fallback": "mingcute:x-skew-fill",
	});
}

export default Component;
