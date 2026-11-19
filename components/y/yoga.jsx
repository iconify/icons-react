import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cmrjxz-dg.css';
import '../../css/r/rq08sniyy.css';
import '../../css/e/ex57pwb0o.css';
import '../../css/m/mxr8wvbuf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="cmrjxz-dg"/><circle class="rq08sniyy"/><path class="ex57pwb0o"/><path class="mxr8wvbuf"/></g>`,
		"fallback": "andrsrxn:yoga",
	});
}

export default Component;
