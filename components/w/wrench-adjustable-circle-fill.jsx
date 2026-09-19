import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jt_gx992h.css';
import '../../css/p/p_gjxbn-x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jt_gx992h"/><path class="p_gjxbn-x"/></g>`,
		"fallback": "bi:wrench-adjustable-circle-fill",
	});
}

export default Component;
