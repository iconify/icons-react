import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d-p0q-lbk.css';
import '../../css/w/w_00x3bju.css';
import '../../css/b/bp5gexn8b.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="d-p0q-lbk"/><path class="w_00x3bju"/><path class="bp5gexn8b"/></g>`,
		"fallback": "fluent-emoji-high-contrast:woman-with-white-cane",
	});
}

export default Component;
