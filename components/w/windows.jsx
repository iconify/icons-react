import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kngy64yfy.css';

const viewBox = {"width":368,"height":408};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kngy64yfy"/>`,
		"fallback": "zmdi:windows",
	});
}

export default Component;
