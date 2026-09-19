import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/aodmvnbdv.css';
import '../../css/e/e5ydtbcjv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="aodmvnbdv"/><path class="e5ydtbcjv"/></g>`,
		"fallback": "si-glyph:wrench-screwdriver",
	});
}

export default Component;
