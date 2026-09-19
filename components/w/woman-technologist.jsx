import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bfy1y561d.css';
import '../../css/s/s0fyeybfs.css';
import '../../css/d/d2q5wabcy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bfy1y561d"/><path class="s0fyeybfs"/><path class="d2q5wabcy"/></g>`,
		"fallback": "fluent-emoji-high-contrast:woman-technologist",
	});
}

export default Component;
