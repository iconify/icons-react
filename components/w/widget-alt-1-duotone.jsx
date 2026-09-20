import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qiqfp6bqh.css';
import '../../css/k/k75-j4b4g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qiqfp6bqh"/><path class="k75-j4b4g"/></g>`,
		"fallback": "si:widget-alt-1-duotone",
	});
}

export default Component;
