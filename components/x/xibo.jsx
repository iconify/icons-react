import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tppqtvgwz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tppqtvgwz"/>`,
		"fallback": "selfhst:xibo",
	});
}

export default Component;
