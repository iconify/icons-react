import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/ackak7b9y.css';
import '../../css/t/t0__wch9i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="ackak7b9y"/><path class="t0__wch9i wm-s"/></g>`,
		"fallback": "withicons:worried-solid",
	});
}

export default Component;
