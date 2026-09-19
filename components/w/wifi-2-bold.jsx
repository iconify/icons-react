import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/auva-r99b.css';
import '../../css/u/utm6-8piu.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><circle class="auva-r99b"/><path class="utm6-8piu"/></g>`,
		"fallback": "glyphs:wifi-2-bold",
	});
}

export default Component;
