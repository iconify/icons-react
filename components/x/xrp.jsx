import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qa-1pznex.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qa-1pznex"/>`,
		"fallback": "thesvg:xrp",
	});
}

export default Component;
