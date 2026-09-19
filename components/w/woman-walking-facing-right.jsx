import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/szl0qtocz.css';
import '../../css/a/a3u6kcbko.css';
import '../../css/a/adz1-bszm.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="szl0qtocz"/><path class="a3u6kcbko"/><path class="adz1-bszm"/></g>`,
		"fallback": "fluent-emoji-high-contrast:woman-walking-facing-right",
	});
}

export default Component;
