import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h90ij6bhi.css';
import '../../css/p/pexrnjh_b.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="h90ij6bhi"/><path class="pexrnjh_b"/></g>`,
		"fallback": "codicon:xai",
	});
}

export default Component;
