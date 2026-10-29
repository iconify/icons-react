import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/c/cr65t2lle.css';
import '../../css/v/vnwlw3via.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="cr65t2lle"/><path class="vnwlw3via"/></g>`,
		"fallback": "withicons:wrench-duo",
	});
}

export default Component;
