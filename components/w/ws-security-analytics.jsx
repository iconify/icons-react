import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/az2yp5b0b.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="az2yp5b0b"/>`,
		"fallback": "oui:ws-security-analytics",
	});
}

export default Component;
