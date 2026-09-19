import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uu329527w.css';
import '../../css/o/ok86obqvp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="uu329527w"/><path class="ok86obqvp"/></g>`,
		"fallback": "fluent-emoji-high-contrast:wind-chime",
	});
}

export default Component;
