import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ztj20xrrt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ztj20xrrt"/>`,
		"fallback": "fluent-emoji-high-contrast:white-small-square",
	});
}

export default Component;
