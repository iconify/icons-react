import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/qnns3cbcc.css';
import '../../css/n/nq91dpkwm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="qnns3cbcc"/><path class="nq91dpkwm wm-a"/></g>`,
		"fallback": "withicons:wrap-text",
	});
}

export default Component;
