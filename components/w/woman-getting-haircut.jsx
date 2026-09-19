import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/ve9ho6b4a.css';
import '../../css/f/frx8fibsc.css';
import '../../css/m/mxt2q1bfv.css';
import '../../css/p/ppqbi6bum.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ve9ho6b4a"/><path class="frx8fibsc"/><path class="mxt2q1bfv"/><path class="ppqbi6bum"/></g>`,
		"fallback": "fluent-emoji-high-contrast:woman-getting-haircut",
	});
}

export default Component;
