import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qpa4bib7e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qpa4bib7e"/>`,
		"fallback": "fluent-emoji-high-contrast:white-square-button",
	});
}

export default Component;
