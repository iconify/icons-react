import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y1hllwb4u.css';
import '../../css/b/bdscbjcnj.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="y1hllwb4u"/><path class="bdscbjcnj"/></g>`,
		"fallback": "glyphs-poly:wifi",
	});
}

export default Component;
