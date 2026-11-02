import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o1nvjccbk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o1nvjccbk"/>`,
		"fallback": "mingcute:webhook-line",
	});
}

export default Component;
