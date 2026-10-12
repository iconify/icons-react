import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f5jsvcc-v.css';
import '../../css/g/gszf-lm8j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f5jsvcc-v"/><path class="gszf-lm8j"/>`,
		"fallback": "energy-icons:whiteboard-48",
	});
}

export default Component;
