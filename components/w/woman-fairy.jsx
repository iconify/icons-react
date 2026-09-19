import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x8v7bub6c.css';
import '../../css/e/eeij7990s.css';
import '../../css/n/nikvdmbrf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="x8v7bub6c"/><path class="eeij7990s"/><path clip-rule="evenodd" class="nikvdmbrf"/></g>`,
		"fallback": "fluent-emoji-high-contrast:woman-fairy",
	});
}

export default Component;
