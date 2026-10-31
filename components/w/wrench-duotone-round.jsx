import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dr_fskbcc.css';
import '../../css/d/d-cko6b3q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dr_fskbcc"/><path class="d-cko6b3q"/></g>`,
		"fallback": "coolicons:wrench-duotone-round",
	});
}

export default Component;
