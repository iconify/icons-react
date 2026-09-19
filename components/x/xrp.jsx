import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/upcfehb3a.css';
import '../../css/w/wf9amc0lk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="upcfehb3a"/><path class="wf9amc0lk"/></g>`,
		"fallback": "cryptocurrency-color:xrp",
	});
}

export default Component;
