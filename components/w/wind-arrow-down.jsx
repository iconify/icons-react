import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r1phblo-j.css';
import '../../css/s/sw23dbp9n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r1phblo-j"/><path class="sw23dbp9n"/></g>`,
		"fallback": "hugeicons:wind-arrow-down",
	});
}

export default Component;
