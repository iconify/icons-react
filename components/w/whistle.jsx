import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a97adjg1b.css';
import '../../css/x/xdhs1acgm.css';
import '../../css/v/v1e4mja3s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a97adjg1b"/><path class="xdhs1acgm"/><path class="v1e4mja3s"/></g>`,
		"fallback": "andrsrxn:whistle",
	});
}

export default Component;
