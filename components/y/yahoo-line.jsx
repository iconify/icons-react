import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dq16c_bps.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dq16c_bps"/>`,
		"fallback": "mingcute:yahoo-line",
	});
}

export default Component;
