import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f06gerbgd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f06gerbgd"/>`,
		"fallback": "cil:wifi-signal-1",
	});
}

export default Component;
