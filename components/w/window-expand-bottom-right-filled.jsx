import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j7nkyrbpl.css';
import '../../css/q/qp2okfzpd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j7nkyrbpl"/><path class="qp2okfzpd"/></g>`,
		"fallback": "reicon:window-expand-bottom-right-filled",
	});
}

export default Component;
