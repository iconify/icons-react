import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/f1z5e3bhu.css';
import '../../css/j/jm7u_x6kk.css';
import '../../css/y/y875pzbpu.css';
import '../../css/e/eshsd_oei.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="f1z5e3bhu"/><path class="jm7u_x6kk"/><path class="wm-a y875pzbpu"/><path class="eshsd_oei wm-s"/></g>`,
		"fallback": "withicons:witch-hat",
	});
}

export default Component;
