import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o8uefub6v.css';
import '../../css/l/lh72t0bxs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o8uefub6v"/><path class="lh72t0bxs"/></g>`,
		"fallback": "iconamoon:zoom-in-duotone",
	});
}

export default Component;
