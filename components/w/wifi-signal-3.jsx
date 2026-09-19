import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f5xtwkbfe.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f5xtwkbfe"/>`,
		"fallback": "cil:wifi-signal-3",
	});
}

export default Component;
