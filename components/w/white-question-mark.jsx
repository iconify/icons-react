import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fz8w-qbht.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fz8w-qbht"/>`,
		"fallback": "fluent-emoji-high-contrast:white-question-mark",
	});
}

export default Component;
