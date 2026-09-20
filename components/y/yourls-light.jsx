import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sdo8u4pgm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sdo8u4pgm"/>`,
		"fallback": "selfhst:yourls-light",
	});
}

export default Component;
