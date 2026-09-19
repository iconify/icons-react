import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x1nr_xbcr.css';
import '../../css/w/w3bam3b0k.css';
import '../../css/k/kx1su814z.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="x1nr_xbcr"/><path class="w3bam3b0k"/><path class="kx1su814z"/></g>`,
		"fallback": "fluent-emoji-high-contrast:woman-with-white-cane-facing-right",
	});
}

export default Component;
