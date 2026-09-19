import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i1o5-ybgl.css';
import '../../css/c/cr1pj8fpu.css';
import '../../css/m/mh4pb4b4l.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i1o5-ybgl"/><path class="cr1pj8fpu"/><path class="mh4pb4b4l"/>`,
		"fallback": "carbon:wifi-bridge-alt",
	});
}

export default Component;
