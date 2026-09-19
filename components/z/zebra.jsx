import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gh90unbsv.css';
import '../../css/i/i6ut9l4iq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gh90unbsv"/><path class="i6ut9l4iq"/></g>`,
		"fallback": "fluent-emoji-high-contrast:zebra",
	});
}

export default Component;
