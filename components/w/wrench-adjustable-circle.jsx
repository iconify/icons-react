import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s9b7cp_uc.css';
import '../../css/k/kg8_1mbve.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="s9b7cp_uc"/><path class="kg8_1mbve"/></g>`,
		"fallback": "bi:wrench-adjustable-circle",
	});
}

export default Component;
