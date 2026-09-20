import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rfy4_i41q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rfy4_i41q"/>`,
		"fallback": "mingcute:wet-line",
	});
}

export default Component;
