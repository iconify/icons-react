import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wik-_ybeo.css';
import '../../css/x/xtxxglbth.css';
import '../../css/r/rf9z3abdj.css';
import '../../css/m/m9ocypb3k.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wik-_ybeo"/><path class="xtxxglbth"/><path class="rf9z3abdj"/><path class="m9ocypb3k"/></g>`,
		"fallback": "fluent-emoji-high-contrast:woman-deaf",
	});
}

export default Component;
