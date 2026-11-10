import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/ghjqc8bag.css';
import '../../css/i/ig7og-50b.css';
import '../../css/y/yxtbk0bmd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ghjqc8bag"/><path class="ig7og-50b"/><path class="yxtbk0bmd"/></g>`,
		"fallback": "andrsrxn:weight-scale",
	});
}

export default Component;
