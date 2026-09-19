import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/djnm4x-rn.css';
import '../../css/p/pwakqpbdf.css';
import '../../css/g/gyuq7dwhf.css';
import '../../css/i/i87qd9t-p.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="djnm4x-rn"/><path class="pwakqpbdf"/><path class="gyuq7dwhf"/><path class="i87qd9t-p"/></g>`,
		"fallback": "fluent-emoji-high-contrast:woman-beard",
	});
}

export default Component;
