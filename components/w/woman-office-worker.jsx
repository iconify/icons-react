import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mfj6vnyiv.css';
import '../../css/m/mb6xo_c1z.css';
import '../../css/f/f2vt3zb5k.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mfj6vnyiv"/><path class="mb6xo_c1z"/><path class="f2vt3zb5k"/></g>`,
		"fallback": "fluent-emoji-high-contrast:woman-office-worker",
	});
}

export default Component;
