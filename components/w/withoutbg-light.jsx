import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e7-oyccyw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e7-oyccyw"/>`,
		"fallback": "selfhst:withoutbg-light",
	});
}

export default Component;
