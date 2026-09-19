import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w6c5nib2b.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w6c5nib2b"/>`,
		"fallback": "fluent-emoji-flat:white-question-mark",
	});
}

export default Component;
