import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ea3tl3bdz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ea3tl3bdz"/>`,
		"fallback": "osmic:windmill-14",
	});
}

export default Component;
