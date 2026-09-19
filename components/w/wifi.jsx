import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qayllgvfl.css';
import '../../css/x/x4-ip00as.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qayllgvfl"/><path class="x4-ip00as"/></g>`,
		"fallback": "bi:wifi",
	});
}

export default Component;
