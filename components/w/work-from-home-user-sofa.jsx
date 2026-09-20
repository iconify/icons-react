import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7fmnlb4r.css';
import '../../css/x/xkbdowbeh.css';
import '../../css/v/vtaxl2b_m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="j7fmnlb4r"><path class="xkbdowbeh"/><path class="vtaxl2b_m"/></g>`,
		"fallback": "streamline-ultimate:work-from-home-user-sofa",
	});
}

export default Component;
