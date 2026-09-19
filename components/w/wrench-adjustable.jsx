import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nb-l-ub_r.css';
import '../../css/o/ohg6ab9ca.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nb-l-ub_r"/><path class="ohg6ab9ca"/></g>`,
		"fallback": "bi:wrench-adjustable",
	});
}

export default Component;
