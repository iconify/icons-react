import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ay2pi0bpt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ay2pi0bpt"/>`,
		"fallback": "mingcute:xrp-fill",
	});
}

export default Component;
