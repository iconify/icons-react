import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f1c4y6ikk.css';
import '../../css/u/urg7fxngv.css';
import '../../css/t/tb8ekkbrt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="f1c4y6ikk"/><path class="urg7fxngv"/><path class="tb8ekkbrt"/></g>`,
		"fallback": "fluent-emoji-high-contrast:woman-artist",
	});
}

export default Component;
