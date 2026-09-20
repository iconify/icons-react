import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nk1sc4blo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nk1sc4blo"/>`,
		"fallback": "mynaui:wifi-medium",
	});
}

export default Component;
