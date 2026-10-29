import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/q7b6p55ew.css';
import '../../css/u/uxsptjbvt.css';
import '../../css/o/opi96xvus.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="q7b6p55ew"/><path class="uxsptjbvt wm-a"/><path class="opi96xvus"/></g>`,
		"fallback": "withicons:wine-duo",
	});
}

export default Component;
