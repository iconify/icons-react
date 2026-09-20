import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d5umep7zh.css';
import '../../css/u/u64purpsc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="d5umep7zh"/><path clip-rule="evenodd" class="u64purpsc"/></g>`,
		"fallback": "reicon:wheel2-filled",
	});
}

export default Component;
