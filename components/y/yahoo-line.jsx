import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/inzek8ert.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="inzek8ert"/>`,
		"fallback": "mingcute:yahoo-line",
	});
}

export default Component;
