import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aswj7bbcw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aswj7bbcw"/>`,
		"fallback": "fluent-emoji-high-contrast:yellow-circle",
	});
}

export default Component;
