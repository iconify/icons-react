import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ei6p8430q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ei6p8430q"/>`,
		"fallback": "thesvg:when-i-work",
	});
}

export default Component;
