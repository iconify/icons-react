import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iff-y2boe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iff-y2boe"/>`,
		"fallback": "typcn:zoom-in-outline",
	});
}

export default Component;
