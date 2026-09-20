import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/udq5q0bwl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="udq5q0bwl"/>`,
		"fallback": "selfhst:wizarr-light",
	});
}

export default Component;
