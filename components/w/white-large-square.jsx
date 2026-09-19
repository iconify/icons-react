import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yatcrldic.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yatcrldic"/>`,
		"fallback": "fluent-emoji-high-contrast:white-large-square",
	});
}

export default Component;
