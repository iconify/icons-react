import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w0oxyi59p.css';
import '../../css/i/i537oybnl.css';
import '../../css/t/tthxbwbtx.css';
import '../../css/b/bimj6bcxy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="w0oxyi59p"/><path class="i537oybnl"/><path class="tthxbwbtx"/><path clip-rule="evenodd" class="bimj6bcxy"/></g>`,
		"fallback": "solar:wi-fi-router-bold",
	});
}

export default Component;
