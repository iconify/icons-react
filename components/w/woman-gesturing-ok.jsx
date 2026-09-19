import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a5pnuusxy.css';
import '../../css/b/blfm17nyz.css';
import '../../css/j/jfvktnb6g.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a5pnuusxy"/><path class="blfm17nyz"/><path class="jfvktnb6g"/></g>`,
		"fallback": "fluent-emoji-high-contrast:woman-gesturing-ok",
	});
}

export default Component;
