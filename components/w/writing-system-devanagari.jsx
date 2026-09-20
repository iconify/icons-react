import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/txxr3r77k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="txxr3r77k"/>`,
		"fallback": "mdi:writing-system-devanagari",
	});
}

export default Component;
