import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zy6q70buu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zy6q70buu"/>`,
		"fallback": "fluent-emoji-high-contrast:white-cane",
	});
}

export default Component;
