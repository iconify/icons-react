import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lu8psr46c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lu8psr46c"/>`,
		"fallback": "selfhst:xfinity",
	});
}

export default Component;
