import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xn_x9rbog.css';
import '../../css/v/vz7caqbcw.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xn_x9rbog"/><path clip-rule="evenodd" class="vz7caqbcw"/></g>`,
		"fallback": "glyphs:wifi-25-bold",
	});
}

export default Component;
