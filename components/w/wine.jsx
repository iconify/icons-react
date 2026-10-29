import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/opi96xvus.css';
import '../../css/u/uxsptjbvt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="opi96xvus"/><path class="uxsptjbvt wm-a"/></g>`,
		"fallback": "withicons:wine",
	});
}

export default Component;
