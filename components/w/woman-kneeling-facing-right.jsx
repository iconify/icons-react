import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w9qny512t.css';
import '../../css/h/hq_1mgfja.css';
import '../../css/x/x32cg2a4u.css';
import '../../css/u/ub643timb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="w9qny512t"/><path class="hq_1mgfja"/><path clip-rule="evenodd" class="x32cg2a4u"/><path class="ub643timb"/></g>`,
		"fallback": "fluent-emoji-high-contrast:woman-kneeling-facing-right",
	});
}

export default Component;
