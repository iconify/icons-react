import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lowszmb9r.css';
import '../../css/u/u8hw2r2tr.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><circle class="lowszmb9r"/><path class="u8hw2r2tr"/></g>`,
		"fallback": "glyphs:wifi-bold",
	});
}

export default Component;
