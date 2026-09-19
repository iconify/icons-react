import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e1t18f8qj.css';
import '../../css/d/dorj-7bxn.css';
import '../../css/c/c_k1iu0hr.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e1t18f8qj"/><path clip-rule="evenodd" class="dorj-7bxn"/><path class="c_k1iu0hr"/></g>`,
		"fallback": "glyphs:windsock-bold",
	});
}

export default Component;
