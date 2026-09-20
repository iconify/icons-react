import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ej4f6f72d.css';
import '../../css/r/riiyjlrme.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ej4f6f72d"/><path clip-rule="evenodd" class="riiyjlrme"/></g>`,
		"fallback": "reicon:window",
	});
}

export default Component;
